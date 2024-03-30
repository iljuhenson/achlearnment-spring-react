package com.iljuhenson.achlearnment.entity;

import com.iljuhenson.achlearnment.entity.enums.AuthorityEnum;
import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "authority")
public class Authority {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name")
    @Enumerated(EnumType.STRING)
    private AuthorityEnum name;
    @ManyToMany
    @JoinTable(name = "user_authority", joinColumns = @JoinColumn(name = "authority_id"), inverseJoinColumns = @JoinColumn(name = "user_id"))
    private Set<User> users;

    public Authority() {
    }

    public Authority(AuthorityEnum name) {
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public AuthorityEnum getName() {
        return name;
    }

    public void setName(AuthorityEnum name) {
        this.name = name;
    }

    public Set<User> getUsers() {
        return users;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }

}
