import { API } from "@API/.";
import { getStudyData } from "@API/Study";
import {
  Table,
  TableHead,
  TableRow,
  TableTitle,
  TableBody,
  TableData,
} from "@Atoms/Table/styles";
import { Dispatch } from "react";

const StudyList = ({
  studyList,
  setStudy,
}: {
  studyList: any;
  setStudy: Dispatch<any>;
}) => {
  const handleStudyClick = async ({
    currentTarget,
  }: {
    currentTarget: any;
  }) => {
    const idx = currentTarget.getAttribute("data-idx");
    const res = await API({ api: getStudyData, data: idx });
    setStudy(res[0]);
    console.log(res[0]);
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          {STUDY_TITLE.map((item) => (
            <TableTitle key={item.key}>{item.title}</TableTitle>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {studyList.map((item: any) => (
          <TableRow
            key={item.studyIdx}
            onClick={handleStudyClick}
            data-idx={item.studyIdx}
          >
            {STUDY_TITLE.map((title) => (
              <TableData key={title.key}>{item[title.key]}</TableData>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StudyList;

const STUDY_TITLE = [
  {
    key: "name",
    title: "스터디 명",
  },
  {
    key: "description",
    title: "설명",
  },
  {
    key: "status",
    title: "상태",
  },
  {
    key: "leaderName",
    title: "스터디 장",
  },
];
