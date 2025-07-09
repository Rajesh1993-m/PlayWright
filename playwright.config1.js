
// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
 const config= ({
  testDir: './Puro',
  retries : 1,
  workers: 3,
  timeout: 40*1000,
  expect:
 {
  timeout: 50*1000,

 },
 reporter : 'html',
  projects:
  [
    {
      name : 'safari',
  use:
  {
    browserName :'webkit',
    headless: false,
    screenshot:'on',
    video : 'retain-on-failure',
    trace:'on',
   ...devices['iPhone 11'],

  }
  },
{
  name : 'chrome',
  use:{
    browserName :'chromium',
    headless: false,
    screenshot:'on',
    video : 'retain-on-failure',
    ignoreHttpsErrors:true,
    permissions : ['geolocation'],
    trace:'on',
   Viewport : {width:520,height:150}
}
  
    }
  ]
});
module.exports=config
