import MediaPhoto from "components/main/MediaPhoto";
import MedialVideo from "components/main/MedialVideo";

import type { FC } from "react";
import type { ListItem } from "hooks/useTweetList";

type Props = Pick<ListItem, "media">;

const MediaComponentMap = {
  photo: MediaPhoto,
  video: MedialVideo,
};

const Media: FC<Props> = ({ media }) => {
  if (media === undefined) {
    return null;
  }

  const MediaComponent = MediaComponentMap[media[0].type];

  return <MediaComponent media={media} />;
};

export default Media;
