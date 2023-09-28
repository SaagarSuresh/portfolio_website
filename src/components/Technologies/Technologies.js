import React from 'react';
import { DiFirebase, DiReact, DiZend, DiHtml5, DiCss3, DiSass, DiJavascript, DiPython, DiMysql, DiNodejs } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle main>
      Technologies
    </SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world. From Back-end to Design.
    </SectionText>
    <List>
      <ListItem>

        <span>
          <DiHtml5 size="3rem"/>
          <DiCss3 size="3rem"/>
          <DiSass size="3rem"/>
          <DiReact size="3rem"/>
        </span>
        
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Html <br />
            Css <br />
            Sass <br />
            React.js <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>

        <span>
          <DiNodejs size="3rem"/>
          <DiMysql size="3rem"/>
        </span>

        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node <br />
            MySql
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>

        <span>
          <DiJavascript size="3rem"/>
          <DiPython size="3rem"/>
        </span>
        
        <ListContainer>
          <ListTitle>Fullstack</ListTitle>
          <ListParagraph>
            Experience with <br />
            Javascript <br />
            Python <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
