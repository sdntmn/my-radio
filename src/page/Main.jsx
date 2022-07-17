import React, { useState, useEffect, useMemo } from "react";
import AudioPlayer from "../components/RadioPlayer";
import AudioControls from "../components/AudioControls";
import Favorites from "../components/Favorites";
import RadioList from "../components/RadioList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import VolumeRange from "../components/VolumeRange";

function Main({ tracks }) {
  let lastRadioStation =
    JSON.parse(localStorage.getItem("lastRadioStation")) || null;
  const [isLastRadioStation, setIsLastRadioStation] =
    useState(lastRadioStation);
  const [radioIndex, setRadioIndex] = useState(isLastRadioStation || 0);
  const [listRadio, setListRadio] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const { name, img, url, id, like } = tracks[radioIndex];
  const [isLike, setIsLike] = useState(like);
  const [isDataListFavorite, setIsDataListFavorite] = useState([]);

  // localStorage
  //===================================================================
  //Список избранного. Первоначальное получение данных из localStorage
  let listSaveInLocalStorage =
    JSON.parse(localStorage.getItem("listSave")) || [];
  // Сохранение в state
  const [listFavoriteId, setListFavoriteId] = useState(listSaveInLocalStorage);

  //Список избранного. Отслеживание изменения и получения данных из localStorage
  useEffect(() => {
    setListFavoriteId(JSON.parse(localStorage.getItem("listSave")));
  }, []);

  // Список избранного. Отслеживания изменений и сохранение данных в LocalStorage.
  useEffect(() => {
    localStorage.setItem("listSave", JSON.stringify(listFavoriteId));
  }, [listFavoriteId]);

  useEffect(() => {
    localStorage.setItem("lastRadioStation", JSON.stringify(radioIndex));
  }, [radioIndex]);

  useEffect(() => {
    setIsLastRadioStation(JSON.parse(localStorage.getItem("lastRadioStation")));
  }, []);

  // =================================================================
  const audioElement = useMemo(() => new Audio(url), [url]);
  audioElement.preload = "none";
  audioElement.step = 0.01; // шаг громкости
  audioElement.value = 0.5; // первоначальная громкость

  // Свойство указывает состояние готовности носителя.
  // Можно использовать как preloader !!!
  const readyToPlay = audioElement.readyState;

  useEffect(() => {
    audioElement.load();
  }, [audioElement, readyToPlay]);

  // Весь список радиостанций
  useEffect(() => {
    if (listRadio.length < 1) {
      setListRadio(tracks.map((item, i) => Object.assign(item, { index: i })));
    }
  }, [listRadio.length, radioIndex, tracks]);

  // отслеживание клика пролистывания нажатия вперед, назад
  function toPrevTrack() {
    if (radioIndex - 1 < 0) {
      setRadioIndex(tracks.length - 1);
    } else {
      setRadioIndex(radioIndex - 1);
    }
  }

  const toNextTrack = () => {
    if (radioIndex < tracks.length - 1) {
      setRadioIndex(radioIndex + 1);
    } else {
      setRadioIndex(0);
    }
  };

  // отслеживание нажатия на плай
  useEffect(() => {
    if (isPlaying) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }, [isPlaying, audioElement, readyToPlay]);

  useEffect(() => {
    return () => {
      audioElement.pause();
    };
  }, [audioElement, url]);

  // ================================================================
  // Получение данных сохраненного радио
  // Для отображения в избранном
  function addDataOnId(tracksId) {
    const track = tracks.find((i) => i.id === tracksId);
    return setIsDataListFavorite([...isDataListFavorite, track]);
  }

  // Удаление из избранного и списка id сохраняемого в localStorage
  function handleCardDelete(tracksId) {
    const track = isDataListFavorite.findIndex((i) => i.id === tracksId);
    console.log(track);
    return (
      setIsDataListFavorite([
        ...isDataListFavorite.slice(0, track),
        ...isDataListFavorite.slice(track + 1),
      ]),
      setListFavoriteId([
        ...listFavoriteId.slice(0, track),
        ...listFavoriteId.slice(track + 1),
      ])
    );
  }

  // Для первоначальной загрузки и обработки данных из localStorage
  useEffect(() => {
    if (listFavoriteId.length !== null && isDataListFavorite.length !== null) {
      const lengthFavoriteId = 0 || listFavoriteId.length;
      const lengthDataListFavorite = 0 || isDataListFavorite.length;
      if (lengthFavoriteId !== lengthDataListFavorite) {
        for (let i = 0; i < lengthFavoriteId; i++) {
          for (let elem of tracks) {
            if (elem.id === listFavoriteId[i]) {
              isDataListFavorite.push(elem);
              elem.like = true;
            }
          }
        }
      }
    }
  }, [isDataListFavorite, isDataListFavorite.length, listFavoriteId, tracks]);

  return (
    <>
      <div className='content page__section'>
        <Header />
        <RadioList
          tracks={tracks}
          setRadioIndex={setRadioIndex}
          like={like}
          listFavorites={listFavoriteId}
        />
        <section className='main'>
          <VolumeRange audioElement={audioElement} />
          <AudioPlayer
            tracks={tracks}
            radioIndex={radioIndex}
            name={name}
            img={img}
            tracksId={id}
            listFavorites={listFavoriteId}
            addFavorite={setListFavoriteId}
            isLike={isLike}
            setLike={setIsLike}
            addDataId={addDataOnId}
            handleCardDelete={handleCardDelete}
            // handleIndexDelete={handleIndexDelete}
          />
          <AudioControls
            isPlaying={isPlaying}
            onPrev={toPrevTrack}
            onNext={toNextTrack}
            onPlayPause={setIsPlaying}
            radioIndex={radioIndex}
          />
        </section>
        <Favorites
          tracks={tracks}
          setRadioIndex={setRadioIndex}
          listFavorite={isDataListFavorite}
          tracksId={id}
          handleCardDelete={handleCardDelete}
        />
        <Footer />
      </div>
    </>
  );
}

export default Main;
