import DefaultLayout from "./default";

interface ILayoutProps {
  children: React.ReactNode;
}

interface IProps {
  component: {
    layout?: React.ComponentType<ILayoutProps> | undefined;
  };
  children: React.ReactNode;
}

const AppLayout: React.FC<IProps> = ({ component, children }) => {
  let Layout: React.ComponentType<ILayoutProps> = DefaultLayout;

  if (component.layout) Layout = component.layout;

  return <Layout>{children}</Layout>;
};

export default AppLayout;
