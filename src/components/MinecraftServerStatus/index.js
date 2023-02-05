import React, {useState, useEffect} from 'react';

export default function MinecraftServerStatus() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [onlinePlayers, setOnlinePlayers] = useState(0);
  
  useEffect(() => {
    fetch("https://mcapi.us/server/status?ip=play.toiletmc.net")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setOnlinePlayers(result.players.now);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <span>[发生错误:{error.message}]</span>;
  } else if (!isLoaded) {
    return <span>[玩家数量加载中]</span>;
  } else {
    return (
      onlinePlayers
    );
  }
}