import './App.css';
import {Header} from "./components/Header/Header";
import {Menu} from "./components/Menu/Menu";
import {Hotels} from "./components/Hotels/Hotels";
import {Component} from "react";
import img1 from '../src/assets/images/hotel1.jpg';
import img2 from '../src/assets/images/hotel2.jpg';
import {v4 as uuid} from 'uuid';
import {LoadingIcon} from "./components/UI/LoadingIcon/LoadingIcon";
import {SearchBar} from "./components/SearchBar/SearchBar";
import {Layout} from "./components/Layout/Layout";
import {Footer} from "./components/Footer/Footer";
import {ThemeButton} from "./components/UI/ThemeButton/ThemeButton";
import {ThemeContext} from "./context/themeContext";
import {AuthContext} from "./context/authContext";


export class App extends Component {
  hotels = [
    {
      id: uuid(),
      name: 'Za górami',
      city: 'Zakopane',
      rating: 8.2,
      opinions: 123,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, dolorem.",
      image: img1,
    },
    {
      id: uuid(),
      name: 'Po drugiej stronie tęczy',
      city: 'Bieszczady',
      rating: 9.0,
      opinions: 20,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, dolorem.",
      image: img2,
    }
  ];
  state = {
    hotels: [],
    loading: true,
    theme: "primary",
    isAuthenticated: false,
  };

  searchHandler = (term) => {
    const hotels = [...this.hotels]
      .filter(({name}, i) => name
        .toLowerCase()
        .startsWith(term.toLowerCase()));
    this.setState({hotels});
  };

  onChangeTheme = () => {
    const newTheme = this.state.theme === "primary" ? "danger" : "primary";
    this.setState({
      theme: newTheme
    });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        hotels: this.hotels,
        loading: false
      });
    }, 1000);
    console.log('komponent zamontowany');
  }

  render() {
    const header = <Header>
      <SearchBar
        onSearch={term => this.searchHandler(term)}
      />
      <ThemeButton/>
    </Header>;
    const menu = <Menu/>;
    const content = this.state.loading
      ? <LoadingIcon
      />
      : <Hotels
        hotels={this.state.hotels}
      />;
    const footer = <Footer/>;

    return (
      <AuthContext.Provider value={{
        isAuthenticated: this.state.isAuthenticated,
        login: () => this.setState({isAuthenticated: true}),
        logout: () => this.setState({isAuthenticated: false}),
      }}>
        <ThemeContext.Provider value={{
          theme: this.state.theme,
          changeTheme: this.onChangeTheme
        }}>
          <Layout
            header={header}
            menu={menu}
            content={content}
            footer={footer}
          />
        </ThemeContext.Provider>
      </AuthContext.Provider>
    );
  }
}

