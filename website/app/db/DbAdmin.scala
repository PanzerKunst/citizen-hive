package db

import anorm._
import play.api.Logger
import play.api.Play.current
import play.api.db.DB

object DbAdmin {
  def reCreateTables() {
    dropTable("open_project")
    dropTable("account")
    dropTable("country")

    createTableCountry()
    createTableAccount()
    createTableOpenProject()
  }

  def initData() {
    initDataCountry()
  }

  private def createTableCountry() {
    DB.withConnection {
      implicit c =>

        val query = """
          CREATE TABLE country (
            id bigserial primary key,
            name VARCHAR(64) NOT NULL,
            UNIQUE (name)
          );"""

        Logger.info("DbAdmin.createTableCountry():" + query)

        SQL(query).executeUpdate()
    }
  }

  private def createTableAccount() {
    DB.withConnection {
      implicit c =>

        val query = """
          CREATE TABLE account (
            id bigserial primary key,
            username VARCHAR(64) NOT NULL,
            email VARCHAR(128) NOT NULL,
            password VARCHAR(128) NOT NULL,
            UNIQUE (username),
            UNIQUE (email)
          );"""

        Logger.info("DbAdmin.createTableAccount():" + query)

        SQL(query).executeUpdate()
    }
  }

  private def createTableOpenProject() {
    DB.withConnection {
      implicit c =>

        val query = """
          create table open_project (
            id bigserial primary key,
            owner_id bigserial not null references account(id),
            title varchar(64) not null,
            description varchar(4096) not null,
            homepage_url varchar(64) not null,
            country_id bigint references country(id), /* We use bigint here instead of bigserial otherwise the column is created as not null */
            locality varchar(64),
            creation_timestamp bigint not null
            );"""

        Logger.info("DbAdmin.createTableOpenProject():" + query)

        SQL(query).executeUpdate()
    }
  }

  private def dropTable(tableName: String) {
    DB.withConnection {
      implicit c =>

        val query = "drop table if exists " + tableName + ";"
        Logger.info("DbAdmin.dropTable(): " + query)
        SQL(query).executeUpdate()
    }
  }

  private def initDataCountry() {
    DB.withConnection {
      implicit c =>

        SQL("insert into country(name) values('Afghanistan');").execute()
        SQL("insert into country(name) values('Åland Islands');").execute()
        SQL("insert into country(name) values('Albania');").execute()
        SQL("insert into country(name) values('Algeria');").execute()
        SQL("insert into country(name) values('American Samoa');").execute()
        SQL("insert into country(name) values('Andorra');").execute()
        SQL("insert into country(name) values('Angola');").execute()
        SQL("insert into country(name) values('Anguilla');").execute()
        SQL("insert into country(name) values('Antarctica');").execute()
        SQL("insert into country(name) values('Antigua and Barbuda');").execute()
        SQL("insert into country(name) values('Argentina');").execute()
        SQL("insert into country(name) values('Armenia');").execute()
        SQL("insert into country(name) values('Aruba');").execute()
        SQL("insert into country(name) values('Australia');").execute()
        SQL("insert into country(name) values('Austria');").execute()
        SQL("insert into country(name) values('Azerbaijan');").execute()
        SQL("insert into country(name) values('Bahamas');").execute()
        SQL("insert into country(name) values('Bahrain');").execute()
        SQL("insert into country(name) values('Bangladesh');").execute()
        SQL("insert into country(name) values('Barbados');").execute()
        SQL("insert into country(name) values('Belarus');").execute()
        SQL("insert into country(name) values('Belgium');").execute()
        SQL("insert into country(name) values('Belize');").execute()
        SQL("insert into country(name) values('Benin');").execute()
        SQL("insert into country(name) values('Bermuda');").execute()
        SQL("insert into country(name) values('Bhutan');").execute()
        SQL("insert into country(name) values('Bolivia');").execute()
        SQL("insert into country(name) values('Bosnia and Herzegovina');").execute()
        SQL("insert into country(name) values('Botswana');").execute()
        SQL("insert into country(name) values('Bouvet Island');").execute()
        SQL("insert into country(name) values('Brazil');").execute()
        SQL("insert into country(name) values('British Indian Ocean Territory');").execute()
        SQL("insert into country(name) values('Brunei Darussalam');").execute()
        SQL("insert into country(name) values('Bulgaria');").execute()
        SQL("insert into country(name) values('Burkina Faso');").execute()
        SQL("insert into country(name) values('Burundi');").execute()
        SQL("insert into country(name) values('Cambodia');").execute()
        SQL("insert into country(name) values('Cameroon');").execute()
        SQL("insert into country(name) values('Canada');").execute()
        SQL("insert into country(name) values('Cape Verde');").execute()
        SQL("insert into country(name) values('Cayman Islands');").execute()
        SQL("insert into country(name) values('Central African Republic');").execute()
        SQL("insert into country(name) values('Chad');").execute()
        SQL("insert into country(name) values('Chile');").execute()
        SQL("insert into country(name) values('China');").execute()
        SQL("insert into country(name) values('Christmas Island');").execute()
        SQL("insert into country(name) values('Cocos (Keeling) Islands');").execute()
        SQL("insert into country(name) values('Colombia');").execute()
        SQL("insert into country(name) values('Comoros');").execute()
        SQL("insert into country(name) values('Congo');").execute()
        SQL("insert into country(name) values('Congo, The Democratic Republic of The');").execute()
        SQL("insert into country(name) values('Cook Islands');").execute()
        SQL("insert into country(name) values('Costa Rica');").execute()
        SQL("insert into country(name) values('Cote D''ivoire');").execute()
        SQL("insert into country(name) values('Croatia');").execute()
        SQL("insert into country(name) values('Cuba');").execute()
        SQL("insert into country(name) values('Cyprus');").execute()
        SQL("insert into country(name) values('Czech Republic');").execute()
        SQL("insert into country(name) values('Denmark');").execute()
        SQL("insert into country(name) values('Djibouti');").execute()
        SQL("insert into country(name) values('Dominica');").execute()
        SQL("insert into country(name) values('Dominican Republic');").execute()
        SQL("insert into country(name) values('Ecuador');").execute()
        SQL("insert into country(name) values('Egypt');").execute()
        SQL("insert into country(name) values('El Salvador');").execute()
        SQL("insert into country(name) values('Equatorial Guinea');").execute()
        SQL("insert into country(name) values('Eritrea');").execute()
        SQL("insert into country(name) values('Estonia');").execute()
        SQL("insert into country(name) values('Ethiopia');").execute()
        SQL("insert into country(name) values('Falkland Islands (Malvinas)');").execute()
        SQL("insert into country(name) values('Faroe Islands');").execute()
        SQL("insert into country(name) values('Fiji');").execute()
        SQL("insert into country(name) values('Finland');").execute()
        SQL("insert into country(name) values('France');").execute()
        SQL("insert into country(name) values('French Guiana');").execute()
        SQL("insert into country(name) values('French Polynesia');").execute()
        SQL("insert into country(name) values('French Southern Territories');").execute()
        SQL("insert into country(name) values('Gabon');").execute()
        SQL("insert into country(name) values('Gambia');").execute()
        SQL("insert into country(name) values('Georgia');").execute()
        SQL("insert into country(name) values('Germany');").execute()
        SQL("insert into country(name) values('Ghana');").execute()
        SQL("insert into country(name) values('Gibraltar');").execute()
        SQL("insert into country(name) values('Greece');").execute()
        SQL("insert into country(name) values('Greenland');").execute()
        SQL("insert into country(name) values('Grenada');").execute()
        SQL("insert into country(name) values('Guadeloupe');").execute()
        SQL("insert into country(name) values('Guam');").execute()
        SQL("insert into country(name) values('Guatemala');").execute()
        SQL("insert into country(name) values('Guernsey');").execute()
        SQL("insert into country(name) values('Guinea');").execute()
        SQL("insert into country(name) values('Guinea-bissau');").execute()
        SQL("insert into country(name) values('Guyana');").execute()
        SQL("insert into country(name) values('Haiti');").execute()
        SQL("insert into country(name) values('Heard Island and Mcdonald Islands');").execute()
        SQL("insert into country(name) values('Holy See (Vatican City State)');").execute()
        SQL("insert into country(name) values('Honduras');").execute()
        SQL("insert into country(name) values('Hong Kong');").execute()
        SQL("insert into country(name) values('Hungary');").execute()
        SQL("insert into country(name) values('Iceland');").execute()
        SQL("insert into country(name) values('India');").execute()
        SQL("insert into country(name) values('Indonesia');").execute()
        SQL("insert into country(name) values('Iran, Islamic Republic of');").execute()
        SQL("insert into country(name) values('Iraq');").execute()
        SQL("insert into country(name) values('Ireland');").execute()
        SQL("insert into country(name) values('Isle of Man');").execute()
        SQL("insert into country(name) values('Israel');").execute()
        SQL("insert into country(name) values('Italy');").execute()
        SQL("insert into country(name) values('Jamaica');").execute()
        SQL("insert into country(name) values('Japan');").execute()
        SQL("insert into country(name) values('Jersey');").execute()
        SQL("insert into country(name) values('Jordan');").execute()
        SQL("insert into country(name) values('Kazakhstan');").execute()
        SQL("insert into country(name) values('Kenya');").execute()
        SQL("insert into country(name) values('Kiribati');").execute()
        SQL("insert into country(name) values('Korea, Democratic People''s Republic of');").execute()
        SQL("insert into country(name) values('Korea, Republic of');").execute()
        SQL("insert into country(name) values('Kuwait');").execute()
        SQL("insert into country(name) values('Kyrgyzstan');").execute()
        SQL("insert into country(name) values('Lao People''s Democratic Republic');").execute()
        SQL("insert into country(name) values('Latvia');").execute()
        SQL("insert into country(name) values('Lebanon');").execute()
        SQL("insert into country(name) values('Lesotho');").execute()
        SQL("insert into country(name) values('Liberia');").execute()
        SQL("insert into country(name) values('Libyan Arab Jamahiriya');").execute()
        SQL("insert into country(name) values('Liechtenstein');").execute()
        SQL("insert into country(name) values('Lithuania');").execute()
        SQL("insert into country(name) values('Luxembourg');").execute()
        SQL("insert into country(name) values('Macao');").execute()
        SQL("insert into country(name) values('Macedonia, The Former Yugoslav Republic of');").execute()
        SQL("insert into country(name) values('Madagascar');").execute()
        SQL("insert into country(name) values('Malawi');").execute()
        SQL("insert into country(name) values('Malaysia');").execute()
        SQL("insert into country(name) values('Maldives');").execute()
        SQL("insert into country(name) values('Mali');").execute()
        SQL("insert into country(name) values('Malta');").execute()
        SQL("insert into country(name) values('Marshall Islands');").execute()
        SQL("insert into country(name) values('Martinique');").execute()
        SQL("insert into country(name) values('Mauritania');").execute()
        SQL("insert into country(name) values('Mauritius');").execute()
        SQL("insert into country(name) values('Mayotte');").execute()
        SQL("insert into country(name) values('Mexico');").execute()
        SQL("insert into country(name) values('Micronesia, Federated States of');").execute()
        SQL("insert into country(name) values('Moldova, Republic of');").execute()
        SQL("insert into country(name) values('Monaco');").execute()
        SQL("insert into country(name) values('Mongolia');").execute()
        SQL("insert into country(name) values('Montenegro');").execute()
        SQL("insert into country(name) values('Montserrat');").execute()
        SQL("insert into country(name) values('Morocco');").execute()
        SQL("insert into country(name) values('Mozambique');").execute()
        SQL("insert into country(name) values('Myanmar');").execute()
        SQL("insert into country(name) values('Namibia');").execute()
        SQL("insert into country(name) values('Nauru');").execute()
        SQL("insert into country(name) values('Nepal');").execute()
        SQL("insert into country(name) values('Netherlands');").execute()
        SQL("insert into country(name) values('Netherlands Antilles');").execute()
        SQL("insert into country(name) values('New Caledonia');").execute()
        SQL("insert into country(name) values('New Zealand');").execute()
        SQL("insert into country(name) values('Nicaragua');").execute()
        SQL("insert into country(name) values('Niger');").execute()
        SQL("insert into country(name) values('Nigeria');").execute()
        SQL("insert into country(name) values('Niue');").execute()
        SQL("insert into country(name) values('Norfolk Island');").execute()
        SQL("insert into country(name) values('Northern Mariana Islands');").execute()
        SQL("insert into country(name) values('Norway');").execute()
        SQL("insert into country(name) values('Oman');").execute()
        SQL("insert into country(name) values('Pakistan');").execute()
        SQL("insert into country(name) values('Palau');").execute()
        SQL("insert into country(name) values('Palestinian Territory, Occupied');").execute()
        SQL("insert into country(name) values('Panama');").execute()
        SQL("insert into country(name) values('Papua New Guinea');").execute()
        SQL("insert into country(name) values('Paraguay');").execute()
        SQL("insert into country(name) values('Peru');").execute()
        SQL("insert into country(name) values('Philippines');").execute()
        SQL("insert into country(name) values('Pitcairn');").execute()
        SQL("insert into country(name) values('Poland');").execute()
        SQL("insert into country(name) values('Portugal');").execute()
        SQL("insert into country(name) values('Puerto Rico');").execute()
        SQL("insert into country(name) values('Qatar');").execute()
        SQL("insert into country(name) values('Reunion');").execute()
        SQL("insert into country(name) values('Romania');").execute()
        SQL("insert into country(name) values('Russian Federation');").execute()
        SQL("insert into country(name) values('Rwanda');").execute()
        SQL("insert into country(name) values('Saint Helena');").execute()
        SQL("insert into country(name) values('Saint Kitts and Nevis');").execute()
        SQL("insert into country(name) values('Saint Lucia');").execute()
        SQL("insert into country(name) values('Saint Pierre and Miquelon');").execute()
        SQL("insert into country(name) values('Saint Vincent and The Grenadines');").execute()
        SQL("insert into country(name) values('Samoa');").execute()
        SQL("insert into country(name) values('San Marino');").execute()
        SQL("insert into country(name) values('Sao Tome and Principe');").execute()
        SQL("insert into country(name) values('Saudi Arabia');").execute()
        SQL("insert into country(name) values('Senegal');").execute()
        SQL("insert into country(name) values('Serbia');").execute()
        SQL("insert into country(name) values('Seychelles');").execute()
        SQL("insert into country(name) values('Sierra Leone');").execute()
        SQL("insert into country(name) values('Singapore');").execute()
        SQL("insert into country(name) values('Slovakia');").execute()
        SQL("insert into country(name) values('Slovenia');").execute()
        SQL("insert into country(name) values('Solomon Islands');").execute()
        SQL("insert into country(name) values('Somalia');").execute()
        SQL("insert into country(name) values('South Africa');").execute()
        SQL("insert into country(name) values('South Georgia and The South Sandwich Islands');").execute()
        SQL("insert into country(name) values('Spain');").execute()
        SQL("insert into country(name) values('Sri Lanka');").execute()
        SQL("insert into country(name) values('Sudan');").execute()
        SQL("insert into country(name) values('Suriname');").execute()
        SQL("insert into country(name) values('Svalbard and Jan Mayen');").execute()
        SQL("insert into country(name) values('Swaziland');").execute()
        SQL("insert into country(name) values('Sweden');").execute()
        SQL("insert into country(name) values('Switzerland');").execute()
        SQL("insert into country(name) values('Syrian Arab Republic');").execute()
        SQL("insert into country(name) values('Taiwan, Province of China');").execute()
        SQL("insert into country(name) values('Tajikistan');").execute()
        SQL("insert into country(name) values('Tanzania, United Republic of');").execute()
        SQL("insert into country(name) values('Thailand');").execute()
        SQL("insert into country(name) values('Timor-leste');").execute()
        SQL("insert into country(name) values('Togo');").execute()
        SQL("insert into country(name) values('Tokelau');").execute()
        SQL("insert into country(name) values('Tonga');").execute()
        SQL("insert into country(name) values('Trinidad and Tobago');").execute()
        SQL("insert into country(name) values('Tunisia');").execute()
        SQL("insert into country(name) values('Turkey');").execute()
        SQL("insert into country(name) values('Turkmenistan');").execute()
        SQL("insert into country(name) values('Turks and Caicos Islands');").execute()
        SQL("insert into country(name) values('Tuvalu');").execute()
        SQL("insert into country(name) values('Uganda');").execute()
        SQL("insert into country(name) values('Ukraine');").execute()
        SQL("insert into country(name) values('United Arab Emirates');").execute()
        SQL("insert into country(name) values('United Kingdom');").execute()
        SQL("insert into country(name) values('United States');").execute()
        SQL("insert into country(name) values('United States Minor Outlying Islands');").execute()
        SQL("insert into country(name) values('Uruguay');").execute()
        SQL("insert into country(name) values('Uzbekistan');").execute()
        SQL("insert into country(name) values('Vanuatu');").execute()
        SQL("insert into country(name) values('Venezuela');").execute()
        SQL("insert into country(name) values('Viet Nam');").execute()
        SQL("insert into country(name) values('Virgin Islands, British');").execute()
        SQL("insert into country(name) values('Virgin Islands, U.S.');").execute()
        SQL("insert into country(name) values('Wallis and Futuna');").execute()
        SQL("insert into country(name) values('Western Sahara');").execute()
        SQL("insert into country(name) values('Yemen');").execute()
        SQL("insert into country(name) values('Zambia');").execute()
        SQL("insert into country(name) values('Zimbabwe');").execute()
    }
  }
}
