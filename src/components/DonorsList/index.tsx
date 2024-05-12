import "./styles.css";
import React, { useState, useEffect } from "react";

type Sponsor = {
  name: string;
  avatar: string;
  amount: string;
};

const UsersList: React.FC = () => {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);

  useEffect(() => {
    fetch("https://api.toiletmc.net/afdian/sponsors")
      .then((response) => response.json())
      .then((data) => setSponsors(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {sponsors.length > 0 ? (
        <div className="grid-container">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="card">
              <img src={sponsor.avatar} alt={sponsor.name} className="avatar" />
              <div className="info">
                <div className="name">{sponsor.name}</div>
                <div className="amount">￥{sponsor.amount}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        "数据加载中…"
      )}
    </div>
  );
};

export default UsersList;
