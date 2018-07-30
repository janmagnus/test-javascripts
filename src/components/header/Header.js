import React from 'react';
import chSVG from './ch.svg'
import agateSVG from './agate.svg'
import chSmallSVG from './chSmall.svg'
import LanguageSwitchBar from "./LanguageSwitchBar";
import {Link} from "react-router-dom";
import LogoutLink from "../logout/LogoutLink";


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true
        };

        this.toggleCollapse = this.toggleCollapse.bind(this);
    }

    toggleCollapse() {
        this.setState({collapsed: !this.state.collapsed});
    }

    render() {
        return (<header className="agate-p-site-header">
                <h1 class="sr-only">Agate</h1>
                <div className="agate-p-site-header__body agate-p-site-header__body--1">
                    <Link to="/">
                        <img src={chSVG}
                             alt="CH Logo"
                             className="d-none d-xl-block"/>
                        <img src={chSmallSVG}
                             alt="CH Logo"
                             className="d-block d-xl-none m-2"/>
                    </Link>
                </div>
                <div className="agate-p-site-header__body agate-p-site-header__body--2">
                    <Link to="/">
                        <img src={agateSVG} alt='ch'/>
                    </Link>
                </div>
                <nav
                    className={"agate-p-site-header__body" + (this.props.withLogout ? " my-2" : " agate-p-site-header__body--3")}>
                    <h2 className="sr-only">
                        Logout
                    </h2>
                    <ul className="agate-p-site-header__navigation agate-p-secondary-navigation">
                        <li className="nav-item">
                            <LogoutLink/>
                        </li>
                    </ul>
                </nav>
                <nav className="agate-c-language-switcher agate-p-site-header__body agate-p-site-header__body--4">
                    <h2 class="sr-only">
                        Sprachwechsel
                    </h2>
                    <LanguageSwitchBar/>
                </nav>
            </header>
        )
    }
}

export default Header;
