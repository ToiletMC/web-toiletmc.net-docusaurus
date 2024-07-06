import React, { useState, useEffect } from "react";

const ResolveDomain: React.FC = () => {
  const [ip, setIp] = useState<string>("正在查询IP地址...");

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await fetch(
          "https://dns.alidns.com/resolve?name=be.toiletmc.net.&type=1"
        );
        const data = await response.json();
        if (data.Answer && data.Answer.length > 0) {
          setIp(data.Answer[0].data);
        } else {
          setIp("IP地址查询失败");
        }
      } catch (error) {
        setIp("查询IP地址时发生错误");
      }
    };

    fetchIp();
  }, []);

  return <>{ip}</>;
};

export default ResolveDomain;
