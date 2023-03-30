/***
 * @file:
 * @author: caojianping
 * @Date: 2023-03-30 10:31:57
 */

import { isUndefinedOrNull } from './utils';

const localStorage = window.localStorage;

/**
 * localStorage类
 */
export default class LocalStorage {
  /**
   * 获取localStorage
   * @param key 存储key
   * @returns 返回存储数据
   */
  public static getItem<T>(key: string): T | null {
    if (!localStorage || !key) {
      return null;
    }

    try {
      const value = localStorage.getItem(key);
      if (value == null) {
        return null;
      } else {
        return <T>JSON.parse(value);
      }
    } catch (error: any) {
      throw `LocalStorage's getItem error: ${JSON.stringify(error)}!`;
    }
  }

  /**
   * 设置localStorage
   * @param key 存储key
   * @param value 存储数据
   * @returns 返回设置结果
   */
  public static setItem<T>(key: string, value: T): boolean {
    if (!localStorage || !key) {
      return false;
    }
    if (isUndefinedOrNull(value)) {
      return false;
    }

    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error: any) {
      throw `LocalStorage's setItem error: ${JSON.stringify(error)}!`;
    }
  }

  /**
   * 移除localStorage
   * @param key 存储key
   * @returns 返回移除结果
   */
  public static removeItem(key: string): boolean {
    if (!localStorage || !key) {
      return false;
    }

    localStorage.removeItem(key);
    return true;
  }

  /**
   * 清除localStorage
   */
  public static clear(): void {
    localStorage && localStorage.clear();
  }
}
