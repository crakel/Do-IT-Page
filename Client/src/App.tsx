import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Page = lazy(() => import("@Pages/."));
const BeforePage = lazy(() => import("@Pages/Before"));
const AdminPage = lazy(() => import("@Pages/Admin"));
const BoardPage = lazy(() => import("@Pages/Board"));
const ErrorPage = lazy(() => import("@Pages/Error"));
const LoginPage = lazy(() => import("@Pages/Login"));
const MainPage = lazy(() => import("@Pages/Main"));
const MyPage = lazy(() => import("@Pages/MyPage"));
const NoticePage = lazy(() => import("@Pages/Notice"));
const ProjectPage = lazy(() => import("@Pages/Project"));
const StudyPage = lazy(() => import("@Pages/Study"));
const ReservePage = lazy(() => import("@Pages/Reserve"));
const RankingPage = lazy(() => import("@Pages/Ranking"));

import PublicRoute from "@Route/PublicRoute";
import PrivateRoute from "@Route/PrivateRoute";
import AdminRoute from "@Route/AdminRoute";

import RegisterPage from "@Pages/Register";
import { ROOM_BOARD_URL } from "@Constant/.";
import PhotosPage from "@Pages/Phtos";
import Spin from "@Atoms/Spinner";

const App = () => {
  return (
    <div style={{ width: "100vw" }}>
      <Suspense fallback={<Spin />}>
        <Routes>
          {/* PublicRoute */}
          <Route
            path="/"
            element={
              <PublicRoute>
                <Page />
              </PublicRoute>
            }
          />
          <Route
            path="/before"
            element={
              <PublicRoute>
                <BeforePage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          {/* PrivateRoute */}
          <Route
            path="/main"
            element={
              <PrivateRoute>
                <MainPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/board"
            element={
              <PrivateRoute>
                <BoardPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/notice"
            element={
              <PrivateRoute>
                <NoticePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/project"
            element={
              <PrivateRoute>
                <ProjectPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/study"
            element={
              <PrivateRoute>
                <StudyPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/mypage"
            element={
              <PrivateRoute>
                <MyPage />
              </PrivateRoute>
            }
          />
          <Route
            path={ROOM_BOARD_URL}
            element={
              <PrivateRoute>
                <ReservePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/rank"
            element={
              <PrivateRoute>
                <RankingPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/photos"
            element={
              <PrivateRoute>
                <PhotosPage />
              </PrivateRoute>
            }
          />

          {/* AdminRoute */}
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminPage />
              </AdminRoute>
            }
          />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
