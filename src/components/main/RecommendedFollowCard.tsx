import { useEffect, useState } from "react";
import Card from "components/common/Card";
import recommendedFollowRepository from "api/followRepository";
import RecommendedFollowListItem from "components/main/RecommendedFollowListItem";
import MoreButton from "components/common/MoreButton";

import type { FC } from "react";
import type { RecommendedFollowItem } from "api/followRepository";

const RecommendedFollowCard: FC = () => {
  const [followList, setFollowList] = useState<RecommendedFollowItem[]>([]);

  useEffect(() => {
    const getFollowList = async () => {
      const followList = await recommendedFollowRepository.get();
      setFollowList(followList);
    };

    getFollowList();
  }, []);

  return (
    <Card title="팔로우 추천">
      {followList.map((item, index) => (
        <RecommendedFollowListItem key={index} data={item} />
      ))}
      <MoreButton />
    </Card>
  );
};

export default RecommendedFollowCard;
