package com.cattle.pojo;

public class Movie {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column movie_table.id
     *
     * @mbggenerated
     */
    private Integer id;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column movie_table.name
     *
     * @mbggenerated
     */
    private String name;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column movie_table.type
     *
     * @mbggenerated
     */
    private Integer type;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column movie_table.country
     *
     * @mbggenerated
     */
    private String country;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column movie_table.directors
     *
     * @mbggenerated
     */
    private String directors;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column movie_table.actors
     *
     * @mbggenerated
     */
    private String actors;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column movie_table.language
     *
     * @mbggenerated
     */
    private String language;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column movie_table.IMDB
     *
     * @mbggenerated
     */
    private Float imdb;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column movie_table.introduction
     *
     * @mbggenerated
     */
    private String introduction;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column movie_table.releasetime
     *
     * @mbggenerated
     */
    private Integer releasetime;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column movie_table.path
     *
     * @mbggenerated
     */
    private String path;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column movie_table.status
     *
     * @mbggenerated
     */
    private Integer status;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column movie_table.cover
     *
     * @mbggenerated
     */
    private String cover;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column movie_table.shortcuts
     *
     * @mbggenerated
     */
    private String shortcuts;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column movie_table.keywords
     *
     * @mbggenerated
     */
    private Integer keywords;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column movie_table.id
     *
     * @return the value of movie_table.id
     *
     * @mbggenerated
     */
    public Integer getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column movie_table.id
     *
     * @param id the value for movie_table.id
     *
     * @mbggenerated
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column movie_table.name
     *
     * @return the value of movie_table.name
     *
     * @mbggenerated
     */
    public String getName() {
        return name;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column movie_table.name
     *
     * @param name the value for movie_table.name
     *
     * @mbggenerated
     */
    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column movie_table.type
     *
     * @return the value of movie_table.type
     *
     * @mbggenerated
     */
    public Integer getType() {
        return type;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column movie_table.type
     *
     * @param type the value for movie_table.type
     *
     * @mbggenerated
     */
    public void setType(Integer type) {
        this.type = type;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column movie_table.country
     *
     * @return the value of movie_table.country
     *
     * @mbggenerated
     */
    public String getCountry() {
        return country;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column movie_table.country
     *
     * @param country the value for movie_table.country
     *
     * @mbggenerated
     */
    public void setCountry(String country) {
        this.country = country == null ? null : country.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column movie_table.directors
     *
     * @return the value of movie_table.directors
     *
     * @mbggenerated
     */
    public String getDirectors() {
        return directors;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column movie_table.directors
     *
     * @param directors the value for movie_table.directors
     *
     * @mbggenerated
     */
    public void setDirectors(String directors) {
        this.directors = directors == null ? null : directors.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column movie_table.actors
     *
     * @return the value of movie_table.actors
     *
     * @mbggenerated
     */
    public String getActors() {
        return actors;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column movie_table.actors
     *
     * @param actors the value for movie_table.actors
     *
     * @mbggenerated
     */
    public void setActors(String actors) {
        this.actors = actors == null ? null : actors.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column movie_table.language
     *
     * @return the value of movie_table.language
     *
     * @mbggenerated
     */
    public String getLanguage() {
        return language;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column movie_table.language
     *
     * @param language the value for movie_table.language
     *
     * @mbggenerated
     */
    public void setLanguage(String language) {
        this.language = language == null ? null : language.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column movie_table.IMDB
     *
     * @return the value of movie_table.IMDB
     *
     * @mbggenerated
     */
    public Float getImdb() {
        return imdb;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column movie_table.IMDB
     *
     * @param imdb the value for movie_table.IMDB
     *
     * @mbggenerated
     */
    public void setImdb(Float imdb) {
        this.imdb = imdb;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column movie_table.introduction
     *
     * @return the value of movie_table.introduction
     *
     * @mbggenerated
     */
    public String getIntroduction() {
        return introduction;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column movie_table.introduction
     *
     * @param introduction the value for movie_table.introduction
     *
     * @mbggenerated
     */
    public void setIntroduction(String introduction) {
        this.introduction = introduction == null ? null : introduction.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column movie_table.releasetime
     *
     * @return the value of movie_table.releasetime
     *
     * @mbggenerated
     */
    public Integer getReleasetime() {
        return releasetime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column movie_table.releasetime
     *
     * @param releasetime the value for movie_table.releasetime
     *
     * @mbggenerated
     */
    public void setReleasetime(Integer releasetime) {
        this.releasetime = releasetime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column movie_table.path
     *
     * @return the value of movie_table.path
     *
     * @mbggenerated
     */
    public String getPath() {
        return path;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column movie_table.path
     *
     * @param path the value for movie_table.path
     *
     * @mbggenerated
     */
    public void setPath(String path) {
        this.path = path == null ? null : path.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column movie_table.status
     *
     * @return the value of movie_table.status
     *
     * @mbggenerated
     */
    public Integer getStatus() {
        return status;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column movie_table.status
     *
     * @param status the value for movie_table.status
     *
     * @mbggenerated
     */
    public void setStatus(Integer status) {
        this.status = status;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column movie_table.cover
     *
     * @return the value of movie_table.cover
     *
     * @mbggenerated
     */
    public String getCover() {
        return cover;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column movie_table.cover
     *
     * @param cover the value for movie_table.cover
     *
     * @mbggenerated
     */
    public void setCover(String cover) {
        this.cover = cover == null ? null : cover.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column movie_table.shortcuts
     *
     * @return the value of movie_table.shortcuts
     *
     * @mbggenerated
     */
    public String getShortcuts() {
        return shortcuts;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column movie_table.shortcuts
     *
     * @param shortcuts the value for movie_table.shortcuts
     *
     * @mbggenerated
     */
    public void setShortcuts(String shortcuts) {
        this.shortcuts = shortcuts == null ? null : shortcuts.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column movie_table.keywords
     *
     * @return the value of movie_table.keywords
     *
     * @mbggenerated
     */
    public Integer getKeywords() {
        return keywords;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column movie_table.keywords
     *
     * @param keywords the value for movie_table.keywords
     *
     * @mbggenerated
     */
    public void setKeywords(Integer keywords) {
        this.keywords = keywords;
    }
}