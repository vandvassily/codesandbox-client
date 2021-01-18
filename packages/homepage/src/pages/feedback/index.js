import React from 'react';
import Layout from '../../components/layout';
import TitleAndMetaTags from '../../components/TitleAndMetaTags';
import Button from '../../components/Button';
import { Description, H6 } from '../../components/Typography';

import {
  ContentBlock,
  Title,
  Subtitle,
  TitleWrapper,
  Wrapper,
  ContentBlockImage,
  FeaturedImage,
} from '../../components/LayoutComponents';

import ide from './images/ide.png';
import bg from './images/bg.png';
import bg1 from './images/bg1.png';
import notifications from './images/notifications.png';

import comments from './images/comments.svg';
import comments1 from './images/comments1.svg';
import comments2 from './images/comments2.svg';

export default () => (
  <Layout>
    <TitleAndMetaTags title="Feedback - Codesandbox" />
    <Wrapper>
      <TitleWrapper>
        <Title>Get better feedback from your whole team</Title>
      </TitleWrapper>
      <Description>
        Give and get feedback, on code or visuals, right in the editor. Take
        action and move forward faster.
      </Description>
      <div
        css={`
          margin: auto;
          display: flex;
          justify-content: center;
          margin: 2rem 0;
        `}
      >
        <Button cta href="https://codesandbox.io/s/">
          Get Started
        </Button>
      </div>
      <div>
        <div>
          <Subtitle as="h2">Keep everyone in the loop</Subtitle>
        </div>
        <FeaturedImage
          bg={bg}
          css={`
            justify-content: flex-start;
            ${props => props.theme.breakpoints.md} {
              margin-top:4rem;
            }
          `}
        >
          <img
            src={ide}
            alt=""
            css={`
              width: 971px;
                     ${props => props.theme.breakpoints.md} {
                  margin-top:4rem;
                }
            `}
          />
        </FeaturedImage>
        <ContentBlock>
          <div>
            <h3>Unlimited viewers</h3>
            Get all stakeholders involved. Invite unlimited viewers for free, to
            review and provide feedback.
          </div>

          <div>
            <h3>Role-based permissions</h3>
            So you can control who can view and add comments, or edit a sandbox.
            As well as administrate your workspace.
          </div>

          <div>
            <h3>Shareable links</h3>
            Per sandbox URLs with HTTPS support for secure project sharing.
          </div>
        </ContentBlock>

        <div
          css={`
            margin-top: 120px;
            margin-bottom: 56px;
          `}
        >
          <Subtitle left as="h2">
            <H6 center>Collaboration</H6>
            Know the context
          </Subtitle>
        </div>

        <ContentBlock>
          <div>
            <ContentBlockImage bg="5962DF">
              <img src={comments} alt="" />
            </ContentBlockImage>
            <h3> Code comments</h3>
            Add feedback about a sandbox as a whole or on specific code lines.
            Ask questions, get answers, or do quick code reviews.
          </div>

          <div>
            <ContentBlockImage bg="151515">
              <img src={comments1} alt="" />
            </ContentBlockImage>
            <h3>Preview comments</h3>
            Add comments about visuals right on the preview. We capture browser
            and resolution details too, for quick repros.
          </div>

          <div>
            <ContentBlockImage bg="151515">
              <img src={comments2} alt="" />
            </ContentBlockImage>
            <h3>In-editor feedback</h3>
            Comments are shown right where you need it, alongside your code in
            the tool where you're working.
          </div>
        </ContentBlock>

        <div
          css={`
            margin-top: 120px;
            margin-bottom: 200px;
            
          `}
        >
          <div>
            <Subtitle as="h2">Stay up to date</Subtitle>
            <h6
              css={`
                font-style: normal;
                font-weight: normal;
                font-size: 23px;
                line-height: 27px;
                text-align: center;
                max-width: 600px;
                color: #999999;
                margin: 0 auto 4rem auto;
              `}
            >
              With email or in-app notifications about new comments and invites,
              you won’t miss a thing.
            </h6>
          </div>
          <FeaturedImage
            bg={bg1}
            css={`
              justify-content: flex-start;
            `}
          >
            <img
              src={notifications}
              alt="Notifications"
              css={`
                width: 996px;
                ${props => props.theme.breakpoints.md} {
                  margin-top:4rem;
                }
              `}
            />
          </FeaturedImage>
        </div>
      </div>
    </Wrapper>
  </Layout>
);
