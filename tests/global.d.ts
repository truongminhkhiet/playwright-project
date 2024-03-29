import { test, expect } from '@playwright/test';

declare global {
  namespace NodeJS {
    interface Global {
      test: typeof test;
      expect: typeof expect;
    }
  }
}
