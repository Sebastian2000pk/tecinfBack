const pool = require("../database/database");

class AdviserService {
  constructor() {}

  async getAllAdvisers() {
    const sql = "SELECT * FROM advisers";
    return await pool.query(sql);
  }

  async createUpdateAdviser(adviser) {
    const sql = adviser.id == null ? "INSERT INTO advisers SET ?" :
      `UPDATE advisers SET ? WHERE id = ${adviser.id}`;
    return await pool.query(sql, adviser);
  }

  async deleteAdviser(id) {
    const sql = `DELETE FROM advisers WHERE id = ${id}`;
    return await pool.query(sql);
  }

  async getAdvisersTypes() {
    const sql = "SELECT * FROM `advisers-types`";
    return await pool.query(sql);
  }

  async getSales() {
    const sql = "SELECT * FROM `sales`";
    return await pool.query(sql);
  }

  async createUpdateSale(data) {
    const dataSale = {
      id: data.idSale ?? null,
      id_adviser: data.id,
      sale: data.sale,
      date: new Date()
    }
    const sql = dataSale.id == null ? "INSERT INTO sales SET ?" :
      `UPDATE sales SET ? WHERE id = ${dataSale.id}`;
    return await pool.query(sql, dataSale);
  }
}

module.exports = AdviserService;
