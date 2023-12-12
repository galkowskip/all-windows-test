<template>
  <div class="user-box">
    <div class="user-box__avatar">
      <img class="user-box__img" :src="user.avatar" :alt="user.name" />
    </div>
    <div class="user-box__info">
      <h3 class="user-box__name primary-on-hover">
        <Tooltip :minWidth="240" :maxWidth="380" position="center">
          <template #default="{ isOpen }">
            {{ user.first_name ?? "" }} {{ user.last_name ?? "" }}
          </template>
          <template #content>
            <ul class="user-box__tooltip-list">
              <li class="user-box__tooltip-item">
                <strong>Username:</strong> {{ user.username }}
              </li>

              <li class="user-box__tooltip-item">
                <strong>Date of Birth:</strong> {{ user.date_of_birth }}
              </li>

              <li class="user-box__tooltip-item">
                <strong>SIN:</strong>
                {{ user.social_insurance_number }}
              </li>
              <li class="user-box__tooltip-item">
                <strong>Gender:</strong> {{ user.gender }}
              </li>
            </ul>
          </template>
        </Tooltip>
      </h3>

      <div class="user-box__info-group">
        <h4 class="user-box__info-group-title">Contact Info:</h4>

        <div class="user-box__info-item">
          <strong>Email:</strong>
          <a :href="`mailto:${user.email}`">{{ user.email }} </a>
        </div>

        <div class="user-box__info-item">
          <strong>Phone:</strong>
          <a :href="`tel:${user.phone_number}`">{{ user.phone_number }} </a>
        </div>
      </div>

      <div class="user-box__info-group">
        <h4 class="user-box__info-group-title">Address:</h4>

        <ul>
          <li class="user-box__info-item">
            {{ user.address.street_name ?? "" }}
            {{ user.address.street_address ?? "" }},
          </li>
          <li class="user-box__info-item">
            {{ user.address.city ?? "" }}, {{ user.address.state ?? "" }}
            {{ user.address.zip_code ?? "" }}
          </li>
        </ul>
      </div>

      <div class="user-box__info-group">
        <h4 class="user-box__info-group-title">Employment Status:</h4>
        <span class="user-box__info-item user-box__info-item--row">
          <span>{{ user.employment.title }} </span>
          <span> ({{ user.employment.key_skill }})</span>
        </span>
      </div>

      <div class="user-box__info-group">
        <h4 class="user-box__info-group-title">Subscription:</h4>
        <Tooltip :minWidth="240" :maxWidth="380" position="top">
          <template #default="{ isOpen }">
            <span class="user-box__info-item primary-on-hover">
              {{ user.subscription.plan }} ({{ user.subscription.status }})
            </span>
          </template>

          <template #content>
            <ul class="user-box__tooltip-list">
              <li class="user-box__tooltip-item">
                <strong>Payment Method:</strong>
                {{ user.subscription.payment_method }}
              </li>

              <li class="user-box__tooltip-item">
                <strong>Term:</strong>
                {{ user.subscription.term }}
              </li>

              <li class="user-box__tooltip-item">
                <strong>Credit Card:</strong>
                {{ user.credit_card.cc_number }}
              </li>
            </ul>
          </template>
        </Tooltip>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { User } from "@/types";
import { defineProps } from "vue";

import Tooltip from "./Tooltip.vue";

const { user } = defineProps<{ user: User }>();
</script>

<style lang="scss">
.user-box {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  padding: 60px 24px 24px 24px;
  border: 1px solid #ccc;
  border-top: 5px solid var(--primary-color);
  border-radius: 12px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;
  background-color: #fff;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  &__avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    top: -50px;
    overflow: hidden;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    background: #fff;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__info {
    display: flex;
    flex-direction: column;
    width: 100%;

    &-group {
      &:not(:last-child) {
        margin-bottom: 20px;
      }
      &-title {
        font-weight: 500;
        font-size: 1.2rem;
        line-height: 1.4rem;
        margin-bottom: 4px;
        margin-right: 8px;
      }
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .user-box__info-item {
        font-weight: 300;

        &--row {
          display: inline-flex;
          flex-wrap: wrap;
          gap: 4px;
        }
        span {
          white-space: nowrap;
        }
        strong {
          font-weight: 400;
          margin-right: 8px;
        }
      }
    }
  }

  &__name {
    margin: 0 0 20px 0;
    transition: color 0.2s ease-in-out;
    font-size: 2rem;
    font-weight: 300;

    text-align: center;
  }

  &__tooltip-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
  }

  &__tooltip-item {
    display: flex;
    width: 100%;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;

    font-weight: 300;
    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
    strong {
      margin-right: 8px;
      white-space: nowrap;
    }
  }
}
</style>
