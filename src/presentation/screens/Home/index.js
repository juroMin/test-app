import React from 'react';
import {View, StatusBar, ScrollView} from 'react-native';
import {SafeAreaLayout, Header, Text} from 'components';
import {DetailsSection} from './components';
import * as Assets from 'assets';
import styles from './styles';

const HomeScreen = () => {
  return (
    <View style={styles.bode}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaLayout>
        <Header />
        <ScrollView>
          <View style={styles.title}>
            <Text h1 centered>
              Echo Company
            </Text>
            <Text h2 centered>
              Impact. Curiosity. Innovations
            </Text>
          </View>
          <DetailsSection
            source={Assets.warsIcon}
            heading="Your financial journey"
            text="Through technology we provide a simple, fast and
            transparent process to support human intelligence over artificial
            intelligence. Expediting the process down to hours, allowing
            entrepreneurs to get back to business and obtain their dreams."
          />
          <DetailsSection
            source={Assets.walletIcon}
            heading="Build Your Credibility"
            text="Establish your business's credibility— with business lenders, potential customers, vendors, or your employees—which is key to your growth and success."
          />
          <DetailsSection
            source={Assets.securityIcon}
            heading="Protect your assets"
            text="When your business is incorporated, creditors can't seek payment from personal assets like your home, cars, or savings—only the corporation's assets."
          />
          <DetailsSection
            source={Assets.financeIcon}
            heading="Achieve Your Business Dreams"
            text="When your business is incorporated, lenders are much more likely to approve you for financing, and always with better terms, lower rates and larger amounts."
          />
          <DetailsSection
            heading="More Than Just a Small Business Financing Company"
            text="At Echo, we come to work each day
            with one simple goal – provide an easy and fast path to business
            Every business is different and has a unique need. We listen
            carefully to YOUR story before we connect you with more than 75
            lenders to find the best option for your need. We understand your
            time is valuable, therefore we developed a streamlined application
            process with limited paperwork, quick approval, and fast funding"
          />
          <View style={styles.footer} />
        </ScrollView>
      </SafeAreaLayout>
    </View>
  );
};

export default HomeScreen;
