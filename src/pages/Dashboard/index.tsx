import React from "react";

import { PageContainer } from "../styles";
import ContentHeader from "@components/ContentHeader";
import SelectInput from "@components/SelectInput";
const Dashboard: React.FC = () => {
  return (
    <PageContainer>
      <ContentHeader title="Dashboard" lineColor="red">
        <SelectInput options={[]} />
        <SelectInput options={[]} />
      </ContentHeader>
    </PageContainer>
  );
};

export default Dashboard;
