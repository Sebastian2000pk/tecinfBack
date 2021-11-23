const pool = require("../database/database");

class CommissionService {
  constructor() {}

  async getCommission() {
    const sql = "SELECT * FROM commissions";
    return await pool.query(sql);
  }

  async createUpdateCommission(commission) {
    const data = {
      id: commission.id,
      name: commission.name,
      goal_percentage: commission.goal_percentage,
      percentage_1: commission.percentage_1,
      percentage_2: commission.percentage_2,
      percentage_3: commission.percentage_3
    }
    
    const sql = commission.id == null ? "INSERT INTO commissions SET ?" :
      `UPDATE commissions SET ? WHERE id = ${commission.id}`;
    return await pool.query(sql, data);
  }

  async deleteAdviser(id) {
    const sql = `DELETE FROM advisers WHERE id = ${id}`;
    return await pool.query(sql);
  }

}

module.exports = CommissionService;
