var overviewerConfig = {
    "CONST": {
        "image": {
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png"
        },
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "tileSize": 384,
        "mapDivId": "mcmap"
    },
    "worlds": [
        "world"
    ],
    "map": {
        "controls": {
            "zoom": true,
            "mapType": true,
            "compass": true,
            "pan": true,
            "spawn": true,
            "overlays": true,
            "coordsBox": true
        },
        "north_direction": "lower-left",
        "cacheTag": "1597482163",
        "debug": true
    },
    "tilesets": [
        {
            "isOverlay": false,
            "world": "world",
            "last_rendertime": 1597481779,
            "maxZoom": 8,
            "north_direction": 0,
            "showlocationmarker": true,
            "path": "day",
            "imgextension": "png",
            "base": "",
            "poititle": "Markers",
            "zoomLevels": 8,
            "spawn": [
                3,
                80,
                12
            ],
            "defaultZoom": 1,
            "bgcolor": "#1a1a1a",
            "name": "Daytime Render",
            "center": [
                3,
                80,
                12
            ],
            "minZoom": 0
        }
    ]
};
