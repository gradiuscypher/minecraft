var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "image": {
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1
    },
    "tilesets": [
        {
            "imgextension": "png",
            "name": "Daytime Render",
            "minZoom": 0,
            "maxZoom": 8,
            "base": "",
            "poititle": "Markers",
            "showlocationmarker": true,
            "spawn": [
                3,
                80,
                12
            ],
            "last_rendertime": 1597301779,
            "north_direction": 0,
            "zoomLevels": 8,
            "path": "day",
            "bgcolor": "#1a1a1a",
            "isOverlay": false,
            "world": "world",
            "center": [
                3,
                80,
                12
            ],
            "defaultZoom": 1
        }
    ],
    "map": {
        "controls": {
            "compass": true,
            "overlays": true,
            "coordsBox": true,
            "mapType": true,
            "zoom": true,
            "spawn": true,
            "pan": true
        },
        "north_direction": "lower-left",
        "cacheTag": "1597302163",
        "debug": true
    },
    "worlds": [
        "world"
    ]
};
