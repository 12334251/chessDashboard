import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { DatePicker, Space, Pagination } from "antd";
import Modal from "../Modal/Modal";
import Loading from "../Loading/Loading";
// import "antd/dist/antd.min.css";
import logo from "../../assets/filter.png";
import "./home.css";
import {
  getPlayerListActions,
  // getSearchMovieActions,
} from "../../redux/Actions/playerActions";

function Home() {
  const [movieSearch, setMovieSearch] = useState("");
  const [filter, setFilter] = useState("");

  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  const playerLists = useSelector((state) => state.playerList);

  const [modalOpen, setModalOpen] = useState(false);
  const [id, setId] = useState("");

  // const [pageSize, setPageSize] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);

  console.log(playerLists);

  useEffect(() => {
    dispatch(getPlayerListActions(currentPage));
  }, [currentPage]);

  // useEffect(() => {
  //     dispatch(getMovieListActions());
  // },[]);

  const onChange = (date, dateString) => {
    setFilter(dateString);
  };

  useEffect(() => {
    if (filter !== "") {
      let temp = playerLists?.playerList?.results.filter((data, index) => {
        return data.release_date.slice(0, 4) === filter;
      });
      setData(temp);
    } else {
      setData(playerLists?.playerList);
    }
  }, [filter, playerLists]);

  const handleSearch = async (event) => {
    // setMovieSearch(event.target.value);
    if (movieSearch === "") {
      dispatch(getPlayerListActions());
      // } else {
      //   dispatch(getSearchMovieActions(movieSearch));
    }
  };

  // const onShowSizeChange = (current) => {
  //     // console.log(current);
  //     setCurrentPage(current);
  //     // dispatch(getMovieListActions(currentPage));
  // };

  // console.log(currentPage);

  // const bg = 'https://image.tmdb.org/t/p/original/';

  // const handlePageChange = (page) => {
  //     setCurrentPage(page);
  // };

  console.log(playerLists?.movieList?.[0]);

  return (
    <>
      {playerLists?.loading ? (
        <div className="load">
          <Loading minHeight="90vh" />
        </div>
      ) : (
        <section className="movie-page">
          <div className="movie-background">
            <div className="container">
              <div className="section mb-3">
                <div className="content">
                  <div className="movie-search">
                    <input
                      type="text"
                      placeholder="Enter keyword"
                      value={movieSearch}
                      onChange={(e) => setMovieSearch(e.target.value)}
                      // onChange={handleSearch}
                    />
                    <button
                      className="btn small"
                      onClick={(e) => handleSearch()}
                    >
                      Search
                    </button>
                  </div>
                  <div className="filter">
                    <img src={logo} alt="" />
                    <Space direction="vertical">
                      <DatePicker
                        onChange={onChange}
                        picker="year"
                        style={{
                          height: "3.5rem",
                          marginTop: "0px",
                          borderRadius: "15px",
                        }}
                      />
                    </Space>
                  </div>
                </div>
                {playerLists?.loading ? (
                  <div className="load">
                    <Loading minHeight="90vh" />
                  </div>
                ) : (
                  <div className="movie-grid">
                    {data?.map((opt, index) => (
                      <div
                        className="main-card"
                        onClick={() => {
                          setModalOpen(true);
                          setId(opt.username);
                        }}
                      >
                        <div
                          className="card"
                          style={{
                            backgroundImage: `url(${opt.avatar})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                          }}
                        >
                          <div className="hBackground"></div>
                        </div>
                        <h3
                          style={{
                            marginTop: "1rem",
                            fontWeight: 600,
                            marginLeft: "10px",
                          }}
                        >
                          {opt.username}
                        </h3>
                        <h3
                          style={{
                            marginBottom: "1rem",
                            fontWeight: 600,
                            marginLeft: "10px",
                          }}
                        >
                          Rank : {opt.rank}
                        </h3>
                      </div>
                    ))}
                    {modalOpen && (
                      <Modal setOpenModal={setModalOpen} playerId={id} />
                    )}
                  </div>
                )}
              </div>
              {data?.length === 0 && (
                <div className="result">
                  <h3 style={{ color: "white" }}>No Results</h3>
                </div>
              )}
            </div>
          </div>
          {/* <div>
            <Pagination
            className="page"
            showSizeChanger={false}
            // onShowSizeChange={onShowSizeChange}
            onChange={onShowSizeChange}
            defaultCurrent={currentPage}
            total={500}
            />
        </div> */}
        </section>
      )}
    </>
  );
}

export default Home;
