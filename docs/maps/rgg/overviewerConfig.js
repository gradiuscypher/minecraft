var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "image": {
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png"
        },
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "tileSize": 384
    },
    "tilesets": [
        {
            "path": "day",
            "center": [
                3,
                80,
                12
            ],
            "imgextension": "png",
            "spawn": [
                3,
                80,
                12
            ],
            "base": "",
            "isOverlay": false,
            "bgcolor": "#1a1a1a",
            "showlocationmarker": true,
            "minZoom": 0,
            "last_rendertime": 1597755379,
            "zoomLevels": 8,
            "poititle": "Markers",
            "world": "world",
            "name": "Daytime Render",
            "north_direction": 0,
            "defaultZoom": 1,
            "maxZoom": 8
        }
    ],
    "map": {
        "controls": {
            "zoom": true,
            "spawn": true,
            "mapType": true,
            "coordsBox": true,
            "pan": true,
            "overlays": true,
            "compass": true
        },
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1597755763"
    },
    "worlds": [
        "world"
    ]
};
