var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png"
        },
        "LOWERLEFT": 3,
        "tileSize": 384,
        "UPPERRIGHT": 1
    },
    "map": {
        "cacheTag": "1596632563",
        "north_direction": "lower-left",
        "controls": {
            "zoom": true,
            "mapType": true,
            "pan": true,
            "overlays": true,
            "coordsBox": true,
            "compass": true,
            "spawn": true
        },
        "debug": true
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "isOverlay": false,
            "base": "",
            "world": "world",
            "bgcolor": "#1a1a1a",
            "minZoom": 0,
            "poititle": "Markers",
            "name": "Daytime Render",
            "north_direction": 0,
            "path": "day",
            "center": [
                3,
                80,
                12
            ],
            "spawn": [
                3,
                80,
                12
            ],
            "maxZoom": 8,
            "showlocationmarker": true,
            "defaultZoom": 1,
            "zoomLevels": 8,
            "imgextension": "png",
            "last_rendertime": 1596632179
        }
    ]
};
