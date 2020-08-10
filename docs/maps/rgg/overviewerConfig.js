var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "image": {
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png"
        },
        "tileSize": 384
    },
    "tilesets": [
        {
            "defaultZoom": 1,
            "base": "",
            "isOverlay": false,
            "bgcolor": "#1a1a1a",
            "zoomLevels": 8,
            "maxZoom": 8,
            "last_rendertime": 1597082179,
            "imgextension": "png",
            "showlocationmarker": true,
            "spawn": [
                3,
                80,
                12
            ],
            "path": "day",
            "north_direction": 0,
            "poititle": "Markers",
            "center": [
                3,
                80,
                12
            ],
            "name": "Daytime Render",
            "world": "world",
            "minZoom": 0
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "spawn": true,
            "zoom": true,
            "pan": true,
            "mapType": true,
            "compass": true,
            "coordsBox": true,
            "overlays": true
        },
        "cacheTag": "1597082563",
        "debug": true
    },
    "worlds": [
        "world"
    ]
};
