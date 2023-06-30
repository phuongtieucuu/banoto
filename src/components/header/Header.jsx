import { Layout, Menu } from "antd";
import { getAccessToken } from "../authentication";
const { Header, Content, Footer } = Layout;
const data = getAccessToken();
const Headers = ({ showModal, name }) => {
  return (
    <div>
      <Layout className="layout">
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            paddingLeft: 200,
            paddingRight: 200,
          }}
        >
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={new Array(5).fill(null).map((_, index) => {
              const key = index + 1;
              return {
                key,
                label: `nav ${key}`,
              };
            })}
          />
          {name ? (
            <h1 className="login">Hello {name.username}</h1>
          ) : (
            <>
              {" "}
              <h1 className="login" onClick={showModal}>
                dang nhap
              </h1>
              <h1 className="register">dang ky</h1>
            </>
          )}
        </Header>
      </Layout>
    </div>
  );
};
export default Headers;
