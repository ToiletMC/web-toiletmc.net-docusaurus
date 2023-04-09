import React, { useState, useEffect } from "react";

export default function MinecraftServerStatus() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [onlinePlayers, setOnlinePlayers] = useState(0);

  useEffect(() => {
    fetch("https://mcapi.us/server/status?ip=play.toiletmc.net")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setOnlinePlayers(result.players.now);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return 0;
  } else if (!isLoaded) {
    return 0;
  } else {
    return onlinePlayers;
  }
}
