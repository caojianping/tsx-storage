/***
 * @file:
 * @author: caojianping
 * @Date: 2023-03-30 10:32:00
 */

import { isUndefinedOrNull } from './utils';

const sessionStorage = window.sessionStorage;

/**
 * sessionStorage类
 */
export default class SessionStorage {
  /**
   * 获取sessionStorage
   * @param key 存储key
   * @returns 返回存储数据
   */
  public static getItem<T>(key: string): T | null {
    if (!sessionStorage || !key) {
      return null;
    }

    try {
      const value = sessionStorage.getItem(key);
      if (value == null) {
        return null;
      } else {
        return <T>JSON.parse(value);
      }
    } catch (error: any) {
      throw `SessionStorage's getItem error: ${JSON.stringify(error)}!`;
    }
  }

  /**
   * 设置sessionStorage
   * @param key 存储key
   * @param value 存储数据
   * @returns 返回设置结果
   */
  public static setItem<T>(key: string, value: T): boolean {
    if (!sessionStorage || !key) {
      return false;
    }
    if (isUndefinedOrNull(value)) {
      return false;
    }

    try {
      sessionStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error: any) {
      throw `SessionStorage's setItem error: ${JSON.stringify(error)}!`;
    }
  }

  /**
   * 移除sessionStorage
   * @param key 存储key
   * @returns 返回移除结果
   */
  public static removeItem(key: string): boolean {
    if (!sessionStorage || !key) {
      return false;
    }

    sessionStorage.removeItem(key);
    return true;
  }

  /**
   * 清除sessionStorage
   */
  public static clear(): void {
    sessionStorage && sessionStorage.clear();
  }
}
