package com.eco.buchungsSystem.repositories;

import com.eco.buchungsSystem.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
public interface EcoUserRepository extends JpaRepository<User, Integer> {
    Optional<User> findUserByUsername(String username);
    @Transactional
    void deleteUserByUsername(String username);
}
