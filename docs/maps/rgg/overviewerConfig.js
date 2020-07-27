var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png"
        },
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0
    },
    "map": {
        "north_direction": "lower-left",
        "debug": true,
        "controls": {
            "coordsBox": true,
            "zoom": true,
            "overlays": true,
            "compass": true,
            "mapType": true,
            "spawn": true,
            "pan": true
        },
        "cacheTag": "1595826254"
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "base": "",
            "world": "world",
            "zoomLevels": 8,
            "spawn": [
                3,
                80,
                12
            ],
            "minZoom": 0,
            "center": [
                3,
                80,
                12
            ],
            "maxZoom": 8,
            "isOverlay": false,
            "defaultZoom": 1,
            "path": "day",
            "north_direction": 0,
            "imgextension": "png",
            "bgcolor": "#1a1a1a",
            "name": "Daytime Render",
            "last_rendertime": 1595825779,
            "showlocationmarker": true,
            "poititle": "Markers"
        }
    ]
};
