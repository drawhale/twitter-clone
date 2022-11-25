import LayoutTemplate from "components/LayoutTemplate";
import Header from "components/Header";
import Main from "components/Main";

import type { FC } from "react";

const MainPage: FC = () => {
  return (
    <LayoutTemplate headerComponent={<Header />} mainComponent={<Main />} />
  );
};

export default MainPage;
