import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../Components/Button';
import Input from '../../Components/Input/Input';
import { ZodSchema, ZodIssue } from 'zod';
import { getError } from '../../helpers/helpers';
import { createFormSchema, joinFormSchema, soloFormSchema } from '../../helpers/zodScemas';
import styles from './Home.module.scss';
import { Socket } from 'socket.io-client';
import InfoPopup from '../../Components/InfoPopup/InfoPopup';
import multiIcon from '../../assets/icons/multiIcon.png';
import soloIcon from '../../assets/icons/soloIcon.png';
import { SoundManager } from '../../utils/SoundManager';

const validate = (schema: ZodSchema, data: any) => {
  const formData = schema.safeParse(data);
  if (!formData.success) {
    const { issues } = formData.error;
    return issues;
  } else {
    return [];
  }
};

type Props = {
  socket: Socket;
};

export default function Home({ socket }: Props) {
  const navigate = useNavigate();
  const [errors, setErrors] = useState(Array<ZodIssue>);
  const [highscores, setHighScores] = useState<Array<any>>([]);
  const [selection, setSelection] = useState('NONE');
  const submitForm = (e: any, formSchema: ZodSchema) => {
    e.preventDefault();
    if (validate(formSchema, e.target).length > 0) {
      setErrors(validate(formSchema, e.target));
      SoundManager.getInstance().playSound('error');

      return;
    }
    if (e.target.lobbyName) navigate(`/lobby/${e.target.lobbyName.value.toUpperCase()}`, { state: { username: e.target.joinName.value } });
    else navigate(`/lobby/${Math.random().toString(16).slice(6).toUpperCase()}`, { state: { username: e.target.createName.value } });
  };

  const soloRef = useRef<HTMLDivElement>(null);
  const multiRef = useRef<HTMLDivElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  const handleClick = (type: string) => {
    if (!soloRef.current || !multiRef.current || !boardRef.current) return;
    switch (type) {
      case 'SOLO':
        soloRef.current.style.width = '50%';
        multiRef.current.style.width = '30%';
        boardRef.current.style.width = '20%';
        setSelection(type);
        break;
      case 'MULTI':
        soloRef.current.style.width = '30%';
        multiRef.current.style.width = '50%';
        boardRef.current.style.width = '20%';
        setSelection(type);
        break;
      case 'BOARD':
        soloRef.current.style.width = '30%';
        multiRef.current.style.width = '30%';
        boardRef.current.style.width = '60%';
        setSelection(type);
        break;
    }
  };

  useEffect(() => {
    socket.emit('getHighScores', setHighScores);
  }, []);

  return (
    <React.Fragment>
      {sessionStorage.getItem('infoPopup') === '0' && <InfoPopup />}
      <div className={styles.wrapper}>
        <div
          ref={soloRef}
          className={`${styles.menuButtons} ${styles.themeSolo} ${selection === 'SOLO' && styles.active}`}
          onMouseDown={() => {
            if (selection !== 'SOLO') {
              SoundManager.getInstance().playSound('click');
            }
          }}
          onClick={() => handleClick('SOLO')}
          onMouseEnter={() => {
            if (selection !== 'SOLO') {
              SoundManager.getInstance().playSound('hover');
            }
          }}
        >
          {selection != 'SOLO' ? (
            <div className={styles.text}>
              <img src={soloIcon} style={{ paddingTop: '16px' }} height={160}></img>
              <div className={styles.title}>Singleplayer</div>
              <div className={styles.desc}>Beat the highscore!</div>
            </div>
          ) : (
            <form
              className={styles.formSolo}
              onSubmit={(e: any) => {
                e.preventDefault();
                if (validate(soloFormSchema, e.target).length > 0) {
                  setErrors(validate(soloFormSchema, e.target));
                  SoundManager.getInstance().playSound('error');
                  return;
                }
                navigate('/solo', { state: { username: e.target[0].value } });
              }}
            >
              <Input name="soloName" label="Username" inputType="themeRed" error={getError('soloName', errors)} />
              <Button type="submit" buttonType="themeRed">
                Play Solo
              </Button>
            </form>
          )}
        </div>
        <div
          ref={multiRef}
          className={`${styles.menuButtons} ${styles.themeMulti} ${selection === 'MULTI' && styles.active}`}
          onMouseDown={() => {
            if (selection !== 'MULTI') {
              SoundManager.getInstance().playSound('click');
            }
          }}
          onClick={() => handleClick('MULTI')}
          onMouseEnter={() => {
            if (selection !== 'MULTI') {
              SoundManager.getInstance().playSound('hover');
            }
          }}
        >
          {selection != 'MULTI' ? (
            <div className={styles.text}>
              <img src={multiIcon} height={160}></img>
              <div className={styles.title}>Multiplayer</div>
              <div className={styles.desc}>Battle with your friends!</div>
            </div>
          ) : (
            <div className={styles.formWrap}>
              <form className={styles.formJoin} onSubmit={(e) => submitForm(e, createFormSchema)}>
                <Input name="createName" label="Username" inputType="themeRed" error={getError('createName', errors)} />
                <Button type="submit" buttonType="themeRed">
                  Create Lobby
                </Button>
              </form>
              <span className={styles.line}>OR</span>
              <form className={styles.formCreate} onSubmit={(e) => submitForm(e, joinFormSchema)}>
                <Input name="joinName" label="Username" inputType="themeRed" error={getError('joinName', errors)} />
                <Input name="lobbyName" label="Lobby ID" inputType="themeRed" error={getError('lobbyName', errors)} />
                <Button type="submit" buttonType="themeRed">
                  Join Lobby
                </Button>
              </form>
            </div>
          )}
        </div>
        <div
          ref={boardRef}
          className={`${styles.menuButtons} ${styles.themeScore}  ${selection === 'BOARD' && styles.active}`}
          onMouseDown={() => {
            if (selection !== 'BOARD') {
              SoundManager.getInstance().playSound('click');
            }
          }}
          onClick={() => handleClick('BOARD')}
          onMouseEnter={() => {
            if (selection !== 'BOARD') {
              SoundManager.getInstance().playSound('hover');
            }
          }}
        >
          {selection != 'BOARD' ? (
            <div className={styles.text}>
              <div className={styles.titleBoard}>Highscores</div>
            </div>
          ) : (
            <table className={styles.highscore}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {highscores.map((item, index) => (
                  <tr key={index}>
                    <td>{item.username}</td>
                    <td>{item.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
