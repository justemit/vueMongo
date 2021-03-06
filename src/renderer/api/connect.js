import http from './config';

class Connect {
  static async getConnect (db, url) {
    const data = await http({
      method: 'post',
      url: '/db/connect',
      data: {db, url}
    })
  
    return data
  }


  /**
   * 获取数据库集合状态
   * @param {*} db 
   */
  static async getDBCollectionStats(db) {
    try {
      const data = await http({
        method: 'get',
        url: `/db/${db}/collections`,
      })

      return data
    }  catch (err) {
      throw new Error(err)
    }
  }

  static async deleteDBCollection(db, collection) {
    try {
      const data = await http({
        method: 'delete',
        url: `/db/${db}/collection/${collection}`,
      })

      return data
    }  catch (err) {
      throw new Error(err)
    }
  }
}

export default Connect;
