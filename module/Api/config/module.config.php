<?php
namespace Api;

use Zend\Router\Http\Literal;
use Zend\ServiceManager\Factory\InvokableFactory;

return [
    'router' => [
        'routes' => [
            'api' => [
                'type' => 'literal',
                'options' => [
                    'route' => '/api[/:id]',
                    'defaults' => [
                        'controller' => Controller\ScheduleController::class
                    ]
                ]
            ]
        ]
    ],
    'controllers' => [
//        'invokables' => [
//            'ScheduleController' => 'Api\Controller\ScheduleController'
//        ],
        'factories' => [
            Controller\ScheduleController::class => InvokableFactory::class,
        ],
    ],
    'view_manager' => [
        'strategies' => array(
            'ViewJsonStrategy',
        )
    ]
];