import React from "react";
import "./modal.css";
import { useEffect } from "react";
import Loading from "../Loading/Loading";
import { useSelector, useDispatch } from "react-redux";
import { getPlayerDetailsActions } from "../../redux/Actions/playerActions";
import profile from '../../assets/user_profile.png';
import moment from "moment";

function Modal({ setOpenModal, playerId }) {
  const dispatch = useDispatch();

  const playerDetails = useSelector((state) => state.playerDetails);

  useEffect(() => {
    dispatch(getPlayerDetailsActions(playerId));
  }, []);

  const bg = "https://image.tmdb.org/t/p/original/";

  console.log(playerDetails);

  return (
    <>
      {playerDetails?.loading ? (
        <div className="load1">
          <Loading minHeight="90vh" />
        </div>
      ) : (
        <div
          className="modalBackground"
          // style={{
          //   backgroundImage: `url(${bg}${playerDetails?.playerDetails?.backdrop_path})`,
          //   backgroundSize: "cover",
          // }}
        >
          {/* <h1>PLayer Profile</h1> */}
          <div className="modalBackground2">
            {playerDetails?.playerDetails?.avatar ? (
              <div
                className="i1"
                style={{
                  backgroundImage: `url(${playerDetails?.playerDetails?.avatar})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat"
                }}
              ></div>
            ) : (
              <div
                className="i1"
                style={{
                  backgroundImage: `url(${profile})`,
                  // backgroundSize: "cover"
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat"
                }}
              ></div>
            )}
            <div className="modalContainer">
              <div className="titleCloseBtn">
                <button
                  onClick={() => {
                    setOpenModal(false);
                  }}
                >
                  X
                </button>
              </div>
              <div className="title">
                <h1>{playerDetails?.playerDetails?.title}</h1>
                {/* <h1>Rank : {playerDetails?.playerDetails?.rank}</h1>  */}
              </div>
              <div className="rating">
                <p>Name : {playerDetails?.playerDetails?.name}</p>
                <p>PLayer Id : {playerDetails?.playerDetails?.player_id}</p>
              </div>
              {/* <div className="genre">
                {playerDetails?.playerDetails?.genres?.map((opt, index) => (
                  <span className="genre__item">{opt?.name}</span>
                ))}
              </div> */}
              {/* <div className="body"></div> */}
              <div className="status">
                <p>Followers : {playerDetails?.playerDetails?.followers}</p>
                <p>Location : {playerDetails?.playerDetails?.location}</p>
                <p>Status : {playerDetails?.playerDetails?.status}</p>
              </div>
              <div className="rating">
                <p>
                  Joined :{" "}
                  {moment(playerDetails?.playerDetails?.joined).format("llll")}
                </p>
                <p>
                  Last Online :{" "}
                  {moment(playerDetails?.playerDetails?.last_online).format(
                    "llll"
                  )}
                </p>
              </div>
              <a href={playerDetails?.playerDetails?.url}>
                <button
                  className="linkBtn"
                  style={{
                    width: "116px",
                    height: "36px",
                    borderRadius: "10px",
                    border: 0,
                    fontSize: "14px",
                    background: "#54B435",
                    color: "#FFF",
                  }}
                >
                  See More
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
