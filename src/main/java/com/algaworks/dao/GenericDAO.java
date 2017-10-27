package com.algaworks.dao;

import java.io.Serializable;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.algaworks.sessaoHibernate.HibernateUtil;

public abstract class GenericDAO<T, I extends Serializable> {
	Session session = HibernateUtil.getSession();

	public T salvar(T entity) {
		Transaction transaction = null;
		try {
			transaction = session.beginTransaction();
			session.save(entity);
			transaction.commit();
			return entity;
		} catch (Exception e) {
			if (transaction != null) {
				transaction.rollback();
			}
			e.printStackTrace();
		}
		return null;
	}

	public void excluir(T entity) {
		Transaction transaction = null;

		try {
			transaction = session.beginTransaction();
			session.delete(entity);
			transaction.commit();
		} catch (Exception e) {
			if (transaction != null) {
				transaction.rollback();
			}
			e.printStackTrace();
		}
	}

	public void alterar(T entity) {
		Transaction transaction = null;
		try {
			transaction = session.beginTransaction();
			session.update(entity);
			transaction.commit();
		} catch (RuntimeException e) {
			if (transaction != null) {
				transaction.rollback();
			}
		}
	}

	@SuppressWarnings("unchecked")
	public List<T> listar(Class<T> classe) {
		Transaction transaction = null;
		List<T> lista = null;
		try {
			transaction = session.beginTransaction();
			Criteria selectAll = session.createCriteria(classe);
			transaction.commit();
			lista = selectAll.list();
		} catch (RuntimeException e) {
			throw e;
		}
		return lista;
	}

	@SuppressWarnings("unchecked")
	public T listarPorId(Class<T> classe, int id) throws Exception {
		Transaction transaction = null;
		try {
			transaction = session.beginTransaction();
			T entity = (T) session.load(classe, id);
			session.flush();
			transaction.commit();
			return entity;
		} catch (RuntimeException e) {
			throw e;
		}
	}

}
