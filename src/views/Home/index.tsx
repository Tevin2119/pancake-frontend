import React from 'react'
import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { Card } from '@pancakeswap/uikit'

import { royalMintPic } from 'views/TradingCompetition/pngs/royalmint'
import royalMint from '../TradingCompetition/pngs/royalMint.jpg'
import Hero from './components/Hero'
import { swapSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'
import MetricsSection from './components/MetricsSection'
import SalesSection from './components/SalesSection'
import WinSection from './components/WinSection'
import Footer from './components/Footer'
import CakeDataRow from './components/CakeDataRow'
import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
import UserBanner from './components/UserBanner'


const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0px;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Home: React.FC = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()

  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px' }
 const royalMint2 = "data:image/png;base64,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"
  return (
    <>
      <StyledHeroSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background={
          theme.isDark
            ? 'radial-gradient(103.12% 50% at 50% 50%, #21193A 0%, #191326 100%)'
            : 'linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)'
        }
        index={2}
        hasCurvedDivider={false}
      >
        {account && (
          <UserBannerWrapper>
            <UserBanner />
          </UserBannerWrapper>
        )}
        <Hero />
      </StyledHeroSection>
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background={
          theme.isDark
            ? 'linear-gradient(180deg, #09070C 22%, #201335 100%)'
            : 'linear-gradient(180deg, #FFFFFF 22%, #D7CAEC 100%)'
        }
        index={2}
        hasCurvedDivider={false}
      >
        <MetricsSection />
      </PageSection>

      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background={
          theme.isDark
            ? 'linear-gradient(180deg, #09070C 22%, #201335 100%)'
            : 'linear-gradient(180deg, #FFFFFF 22%, #D7CAEC 100%)'
        }
        index={2}
        hasCurvedDivider={false}
      >
        {/* <MetricsSection /> */}
        {/* <img src={royalMint2} alt="Fuck you" /> */}
        <Card id="0">
        <img src={royalMintPic} alt="opps"/>
        </Card>

        <button aria-label="Mute volume" type="button" onClick={() => {document.getElementById("1").hidden = false; document.getElementById("0").hidden = true}}>this renders my images </button>
        <Card hidden id="1">
        <img src={royalMint} alt="opps"/>
        </Card>
      </PageSection>
    </>
  )
}

export default Home
