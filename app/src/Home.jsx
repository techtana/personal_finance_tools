import React from "react";


const Home = () => {
    return (
      <>
        <section id="home">
            <h1>Navigating Personal Finance with Data</h1>
            <p>
              Discover powerful tools to manage your personal finances efficiently. 
              Whether you're budgeting, investing, or planning for the future, we have the resources you need.
            </p>
        </section>
        <br/>
        <section id="budgeting">
            <h3>Budgeting Tools</h3>
            <p>Explore our budgeting tools designed to help you track expenses, set financial goals, and achieve financial stability.</p>
            <img src='https://via.placeholder.com/400' />
        </section>
        <br/>
        <section id="investing">
            <h3>Investing Tools</h3>
            <p>Discover tools to analyze investments, manage portfolios, and make informed decisions about your investments.</p>
            <img src='https://via.placeholder.com/400' />
        </section>
        <br/>
        <section id="tools">
            <h3>Other Financial Tools</h3>
            <p>Explore additional tools such as loan calculators, retirement planners, and more to aid your financial planning.</p>
            <img src='https://via.placeholder.com/400' />
        </section>
      </>
    );
  }


export default Home;