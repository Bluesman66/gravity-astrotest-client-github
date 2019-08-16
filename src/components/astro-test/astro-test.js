import React from 'react';

import { 
    AstroTestContainer,
    AstroTestDialogProps,
    AstroTestContentProps,
    AstroTestHeader,
    AstroTestBody,
    AstroTestControlPanel,
    AstroTestTitle,
    AstroTestGender,
    AstroTestLabel,
    AstroTestGenderButtons
} from './astro-test-components';

import male from './images/male.png';
import female from './images/female.png';

import './astro-test.css';

const AstroTest = () => {
    return (
        <AstroTestContainer>
            <AstroTestDialogProps>
                <AstroTestContentProps>
                    <AstroTestHeader />
                    <AstroTestBody>
                        <AstroTestControlPanel>
                            <AstroTestTitle>Take the Astro-Test</AstroTestTitle>
                            
                            <AstroTestGender>
                                <AstroTestLabel>Gender</AstroTestLabel>                                
                                <AstroTestGenderButtons>
                                    {/* eslint-disable-next-line */}
                                    <a className="nice-button 
                                        nice-button--gender
                                        nice-button--male" href="#">Male <img className="nice-button--pict" src={male} alt=""/> </a>
                                    {/* eslint-disable-next-line */}    
                                    <a className="nice-button 
                                        nice-button--gender
                                        nice-button--female" href="#">Female <img className="nice-button--pict" src={female} alt=""/></a>
                                </AstroTestGenderButtons>                                  
                            </AstroTestGender>

                            <div className="astro-test__dob">
                                <AstroTestLabel>Date of birth</AstroTestLabel>                                
                                <div className="astro-test__dob-date">
                                    <select className="form-control astro-test__dob-day">
                                        <option disabled selected hidden>Day</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                        <option>13</option>
                                        <option>14</option>
                                        <option>15</option>
                                        <option>16</option>
                                        <option>17</option>
                                        <option>18</option>
                                        <option>19</option>
                                        <option>20</option>
                                        <option>21</option>
                                        <option>22</option>
                                        <option>23</option>
                                        <option>24</option>
                                        <option>25</option>
                                        <option>26</option>
                                        <option>27</option>
                                        <option>28</option>
                                        <option>29</option>
                                        <option>30</option>
                                        <option>31</option>                                        
                                    </select>
                                    <select className="form-control astro-test__dob-month">
                                        <option disabled selected hidden>Month</option>
                                        <option>January</option>
                                        <option>February</option>
                                        <option>March</option>
                                        <option>April</option>
                                        <option>May</option>
                                        <option>June</option>
                                        <option>July</option>
                                        <option>August</option>
                                        <option>September</option>
                                        <option>October</option>
                                        <option>November</option>
                                        <option>December</option>
                                    </select>
                                    <select className="form-control astro-test__dob-year">
                                        <option disabled selected hidden>Year</option>
                                        <option>1900</option>
                                        <option>1901</option>
                                        <option>1902</option>
                                        <option>1903</option>
                                        <option>1904</option>
                                        <option>1905</option>
                                        <option>1906</option>
                                        <option>1907</option>
                                        <option>1908</option>
                                        <option>1909</option>
                                        <option>1910</option>
                                        <option>1911</option>
                                        <option>1912</option>
                                        <option>1913</option>
                                        <option>1914</option>
                                        <option>1915</option>
                                        <option>1916</option>
                                        <option>1917</option>
                                        <option>1918</option>
                                        <option>1919</option>
                                        <option>1920</option>
                                        <option>1921</option>
                                        <option>1922</option>
                                        <option>1923</option>
                                        <option>1924</option>
                                        <option>1925</option>
                                        <option>1926</option>
                                        <option>1927</option>
                                        <option>1928</option>
                                        <option>1929</option>
                                        <option>1930</option>
                                        <option>1931</option>
                                        <option>1932</option>
                                        <option>1933</option>
                                        <option>1934</option>
                                        <option>1935</option>
                                        <option>1936</option>
                                        <option>1937</option>
                                        <option>1938</option>
                                        <option>1939</option>
                                        <option>1940</option>
                                        <option>1941</option>
                                        <option>1942</option>
                                        <option>1943</option>
                                        <option>1944</option>
                                        <option>1945</option>
                                        <option>1946</option>
                                        <option>1947</option>
                                        <option>1948</option>
                                        <option>1949</option>
                                        <option>1950</option>
                                        <option>1951</option>
                                        <option>1952</option>
                                        <option>1953</option>
                                        <option>1954</option>
                                        <option>1955</option>
                                        <option>1956</option>
                                        <option>1957</option>
                                        <option>1958</option>
                                        <option>1959</option>
                                        <option>1960</option>
                                        <option>1961</option>
                                        <option>1962</option>
                                        <option>1963</option>
                                        <option>1964</option>
                                        <option>1965</option>
                                        <option>1966</option>
                                        <option>1967</option>
                                        <option>1968</option>
                                        <option>1969</option>
                                        <option>1970</option>
                                        <option>1971</option>
                                        <option>1972</option>
                                        <option>1973</option>
                                        <option>1974</option>
                                        <option>1975</option>
                                        <option>1976</option>
                                        <option>1977</option>
                                        <option>1976</option>
                                        <option>1978</option>
                                        <option>1979</option>
                                        <option>1980</option>
                                        <option>1981</option>
                                        <option>1982</option>
                                        <option>1983</option>
                                        <option>1984</option>
                                        <option>1985</option>
                                        <option>1986</option>
                                        <option>1987</option>
                                        <option>1988</option>
                                        <option>1989</option>
                                        <option>1990</option>
                                        <option>1991</option>
                                        <option>1992</option>
                                        <option>1993</option>
                                        <option>1994</option>
                                        <option>1995</option>
                                        <option>1996</option>
                                        <option>1997</option>
                                        <option>1998</option>
                                        <option>1999</option>
                                        <option>2000</option>
                                        <option>2001</option>
                                        <option>2002</option>
                                        <option>2003</option>
                                        <option>2004</option>
                                        <option>2005</option>
                                        <option>2006</option>
                                        <option>2007</option>
                                        <option>2008</option>
                                        <option>2009</option>
                                        <option>2010</option>
                                        <option>2011</option>
                                        <option>2012</option>
                                        <option>2013</option>
                                        <option>2014</option>
                                        <option>2015</option>
                                        <option>2016</option>
                                        <option>2017</option>
                                        <option>2018</option>                                        
                                    </select>
                                </div>
                            </div>

                            <a className="nice-button
                                nice-button--astro-test
                                nice-button--astro-test_get_started" href="#reports" data-toggle="modal">Take a test</a>

                            <div className="astro-test__sign-in">Would rather skip this?&nbsp;
                                {/* eslint-disable-next-line */}
                                <a className="nice-href" href="#">Sign in</a>
                            </div>

                            <p className="astro-test__agreement">We will never share your data. By taking the test you agree to the&nbsp;
                                {/* eslint-disable-next-line */}
                                <a className="nice-href" href="#">Terms and Conditions</a>&nbsp;and&nbsp;
                                {/* eslint-disable-next-line */}
                                <a className="nice-href" href="#">Privacy Policy</a>
                            </p>                            
                        </AstroTestControlPanel>

                        <div className="astro-test__banner-panel">
                            <div className="astro-test__banner">
                                <p className="astro-test__banner-text">Astrology stood the test of time but is it still relevant in today’s scientific world?</p>
                            </div>
                        </div>
                    </AstroTestBody>
                </AstroTestContentProps>
            </AstroTestDialogProps>
        </AstroTestContainer>            
    );
}

export default AstroTest;