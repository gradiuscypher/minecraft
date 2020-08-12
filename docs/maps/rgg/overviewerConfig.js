var overviewerConfig = {
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "mapType": true,
            "zoom": true,
            "spawn": true,
            "pan": true,
            "overlays": true,
            "coordsBox": true,
            "compass": true
        },
        "debug": true,
        "cacheTag": "1597244563"
    },
    "CONST": {
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "image": {
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png"
        },
        "tileSize": 384,
        "mapDivId": "mcmap"
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "center": [
                3,
                80,
                12
            ],
            "name": "Daytime Render",
            "north_direction": 0,
            "imgextension": "png",
            "world": "world",
            "bgcolor": "#1a1a1a",
            "path": "day",
            "showlocationmarker": true,
            "minZoom": 0,
            "last_rendertime": 1597244179,
            "base": "",
            "isOverlay": false,
            "spawn": [
                3,
                80,
                12
            ],
            "zoomLevels": 8,
            "poititle": "Markers",
            "defaultZoom": 1,
            "maxZoom": 8
        }
    ]
};
