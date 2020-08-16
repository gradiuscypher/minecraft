var overviewerConfig = {
    "map": {
        "debug": true,
        "cacheTag": "1597597364",
        "controls": {
            "mapType": true,
            "coordsBox": true,
            "overlays": true,
            "compass": true,
            "zoom": true,
            "spawn": true,
            "pan": true
        },
        "north_direction": "lower-left"
    },
    "tilesets": [
        {
            "path": "day",
            "north_direction": 0,
            "imgextension": "png",
            "bgcolor": "#1a1a1a",
            "center": [
                3,
                80,
                12
            ],
            "isOverlay": false,
            "defaultZoom": 1,
            "maxZoom": 8,
            "showlocationmarker": true,
            "name": "Daytime Render",
            "base": "",
            "minZoom": 0,
            "poititle": "Markers",
            "world": "world",
            "zoomLevels": 8,
            "last_rendertime": 1597596979,
            "spawn": [
                3,
                80,
                12
            ]
        }
    ],
    "worlds": [
        "world"
    ],
    "CONST": {
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "image": {
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "mapDivId": "mcmap"
    }
};
