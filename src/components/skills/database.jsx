import React from 'react'

function Database() {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Data Base</h3>

    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Mysql</h3>
                    <span className="skills__level">Advanced</span>
                </div>
            </div>
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Postgres</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div>
        </div>
        <div className="skills__group">
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">MongoDB</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div>
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">SQL Server</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Database