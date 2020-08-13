var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png"
        },
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "minZoom": 0,
            "name": "Daytime Render",
            "spawn": [
                3,
                80,
                12
            ],
            "bgcolor": "#1a1a1a",
            "north_direction": 0,
            "showlocationmarker": true,
            "zoomLevels": 8,
            "base": "",
            "last_rendertime": 1597316179,
            "maxZoom": 8,
            "world": "world",
            "poititle": "Markers",
            "defaultZoom": 1,
            "isOverlay": false,
            "imgextension": "png",
            "path": "day",
            "center": [
                3,
                80,
                12
            ]
        }
    ],
    "map": {
        "debug": true,
        "controls": {
            "mapType": true,
            "compass": true,
            "coordsBox": true,
            "spawn": true,
            "pan": true,
            "zoom": true,
            "overlays": true
        },
        "cacheTag": "1597316564",
        "north_direction": "lower-left"
    },
    "worlds": [
        "world"
    ]
};
