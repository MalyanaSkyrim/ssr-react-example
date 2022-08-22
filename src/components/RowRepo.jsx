import React from "react";
import { Link } from "react-router-dom";
import "./rowRepo.css";
import StarSvg  from "../assets/svg/star.svg";
import IssueSvg from "../assets/svg/issue.svg";

function RowRepo({
  title,
  description,
  avatarUrl,
  nbStars,
  nbIssues,
  timeInterval,
  ownerName,
  repoUrl,
}) {
  return (
    <div className="row-repo">
      <Link to={`/user/${ownerName}`}>
        <img className="row-repo__img" alt="avatar" src={avatarUrl} />
      </Link>
      <div className="row-repo__text">
        <div className="text-container">
          <div className="text-container__top">
            <a className="repoTitle" href={repoUrl}>
              {title}
            </a>
            <p>{description}</p>
          </div>

          <div className="text-container__bottom">
            <div >
              <StarSvg />
              <span style={{ marginLeft: "6px" }}> {nbStars}</span>
            </div>
            <div >
              <IssueSvg />
              <span style={{ marginLeft: "6px" }}> {nbIssues}</span>
            </div>
            <div>
              Submitted {timeInterval} day ago by{" "}
              <Link to={`/user/${ownerName}`}>
                <span className="ownerName">{ownerName}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RowRepo;
