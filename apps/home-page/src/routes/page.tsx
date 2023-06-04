import { Helmet } from '@modern-js/runtime/head';
import './index.css';

const Index = () => {
  return (
    <div className="w-full h-full">
      <Helmet>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
        />
      </Helmet>
      <div className="w-full h-full welcome-view-background">
        <article className="typewriter w-full h-full flex flex-col justify-center items-center p-2 welcome-view-layout">
          <h1 className="welcome-view-title text-center font-bold text-7xl md:text-9xl">
            分享，共赢
          </h1>
        </article>
      </div>
    </div>
  );
};

export default Index;
