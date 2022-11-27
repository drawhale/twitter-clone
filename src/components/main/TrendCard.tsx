import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "components/common/Card";
import trendRepository from "api/trendRepository";
import TrendListItem from "components/main/TrendListItem";
import MoreButton from "components/common/MoreButton";

import type { FC } from "react";
import type { TrendItem } from "api/trendRepository";

const TrendCard: FC = () => {
  const [trendList, setTrendList] = useState<TrendItem[]>([]);

  useEffect(() => {
    const getTrendList = async () => {
      const trendList = await trendRepository.get();
      setTrendList(trendList);
    };

    getTrendList();
  }, []);

  return (
    <Card title="나를 위한 트렌드">
      {trendList.map((item, index) => (
        <TrendListItem key={index} data={item} />
      ))}
      <MoreButton />
    </Card>
  );
};

export default TrendCard;
