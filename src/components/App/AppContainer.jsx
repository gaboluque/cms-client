import { ConfigProvider, Layout } from 'antd';
import esEs from 'antd/es/locale/es_ES';
import React from 'react';
import { connect } from 'react-redux';
import RoutesContainer from './RoutesContainer';

const AppContainer = () => {
  const layoutClasses = () => {
    const classes = '';
    return classes;
  };

  return (
    <ConfigProvider locale={esEs}>
      <Layout className={layoutClasses()}>
        <Layout>
          <Layout>
            <Layout.Content>
              <RoutesContainer />
            </Layout.Content>
          </Layout>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

AppContainer.propTypes = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
